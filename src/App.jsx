import React from "react";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import RecipesPage from "./pages/Recipes";
import RecipeDetailsPage from "./pages/RecipeDetails";
import CookingModePage from "./pages/CookingMode";
import PlannerPage from "./pages/Planner";
import FavoritesPage from "./pages/Favorites";
import RemindersPage from "./pages/Reminders";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { recipes as recipeList } from "./data/recipes";

const defaultProfile = {
  dark: true,
  calm: false,
  font: "normal",
  dietary: {
    gluten: false,
    lactose: false,
    sugar: false,
    vegetarian: false
  },
  sensory: {
    soft: true,
    creamy: true,
    crunchy: false,
    liquid: false,
    mild: true,
    fewIngredients: false
  }
};

const loadStored = (key, fallback) => {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

function App() {
  const [currentUser, setCurrentUser] = useState(() => loadStored("rd-session", null));
  const [favorites, setFavorites] = useState(() => loadStored("rd-favorites", []));
  const [planner, setPlanner] = useState(() => loadStored("rd-planner", {}));
  const [profile, setProfile] = useState(() => loadStored("rd-profile", defaultProfile));

  useEffect(() => {
    if (currentUser) {
      window.localStorage.setItem("rd-session", JSON.stringify(currentUser));
    } else {
      window.localStorage.removeItem("rd-session");
    }
  }, [currentUser]);

  useEffect(() => {
    window.localStorage.setItem("rd-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    window.localStorage.setItem("rd-planner", JSON.stringify(planner));
  }, [planner]);

  useEffect(() => {
    window.localStorage.setItem("rd-profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", profile.dark);
    document.body.classList.toggle("calm-mode", profile.calm);
    document.body.classList.toggle("high-contrast", profile.contrast);
    document.body.dataset.font = profile.font || "normal";
  }, [profile]);

  const recipeMap = useMemo(
    () => Object.fromEntries(recipeList.map((recipe) => [recipe.id, recipe])),
    []
  );

  const toggleFavorite = (recipeId) => {
    setFavorites((previous) =>
      previous.includes(recipeId)
        ? previous.filter((id) => id !== recipeId)
        : [...previous, recipeId]
    );
  };

  const addToPlanner = (recipe) => {
    const dayNames = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const mealNames = ["Café da manhã", "Almoço", "Lanche", "Jantar"];

    for (const day of dayNames) {
      for (const meal of mealNames) {
        const key = `${day}-${meal}`;
        if (!planner[key]) {
          setPlanner((previous) => ({ ...previous, [key]: { recipeId: recipe.id, status: "Planejado" } }));
          return;
        }
      }
    }

    setPlanner((previous) => ({ ...previous, ["Segunda-Almoço"]: { recipeId: recipe.id, status: "Planejado" } }));
  };

  if (!currentUser) {
    return <LoginPage onLogin={setCurrentUser} />;
  }

  return (
    <BrowserRouter>
      <div className={`app-shell ${profile.dark ? "dark-theme" : ""} ${profile.calm ? "calm-mode" : ""} font-${profile.font}`}>
        <Sidebar
          darkMode={profile.dark}
          onToggleDarkMode={() => setProfile((previous) => ({ ...previous, dark: !previous.dark }))}
          user={currentUser}
          onLogout={() => setCurrentUser(null)}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  recipes={recipeList}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  planner={planner}
                  recipeMap={recipeMap}
                  profile={profile}
                />
              }
            />
            <Route
              path="/receitas"
              element={
                <RecipesPage
                  recipes={recipeList}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/receitas/:id"
              element={
                <RecipeDetailsPage
                  recipes={recipeList}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onAddToPlanner={addToPlanner}
                />
              }
            />
            <Route path="/cozinha/:id" element={<CookingModePage recipes={recipeList} />} />
            <Route
              path="/planejamento"
              element={
                <PlannerPage
                  recipes={recipeList}
                  planner={{ ...planner, recipeMap }}
                  setPlanner={setPlanner}
                />
              }
            />
            <Route
              path="/favoritos"
              element={
                <FavoritesPage
                  recipes={recipeList}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/lembretes" element={<RemindersPage />} />
            <Route
              path="/perfil"
              element={<ProfilePage profile={profile} setProfile={setProfile} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
