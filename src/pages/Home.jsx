import React from "react";
import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MealCard from "../components/MealCard";
import RecipeCard from "../components/RecipeCard";
import { mealSchedule } from "../data/recipes";

function formatDate() {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());
}

export default function Home({ recipes, favorites, onToggleFavorite, planner, profile }) {
  const dayIndex = new Date().getDay();
  const currentDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][dayIndex === 0 ? 0 : dayIndex];

  const todaysMeals = mealSchedule.map(({ name, time }) => {
    const entry = planner[`${currentDay}-${name}`];
    const recipeId = typeof entry === "object" ? entry.recipeId : entry;
    const recipe = recipeId ? recipes.find((item) => item.id === recipeId) : null;
    const status = recipe ? (typeof entry === "object" && entry.status === "Concluído" ? "Concluído" : "Planejado") : "Não planejado";

    return {
      meal: name,
      schedule: time,
      title: recipe ? recipe.title : "Nenhuma refeição planejada",
      recipe,
      time: recipe ? `${recipe.time} min` : "",
      texture: recipe ? recipe.texture : "",
      status
    };
  });

  const dietaryLabels = { gluten: "Sem glúten", lactose: "Sem lactose", sugar: "Sem açúcar", vegetarian: "Vegetariana" };
  const sensoryLabels = { soft: "Macia", creamy: "Cremosa", crunchy: "Crocante", liquid: "Líquida", mild: "Sabor suave", fewIngredients: "Poucos ingredientes" };
  const recommended = [...recipes].sort((first, second) => {
    const score = (recipe) => {
      const dietaryScore = Object.entries(profile?.dietary || {}).reduce((total, [key, selected]) => total + (selected && recipe.tags.includes(dietaryLabels[key]) ? 2 : 0), 0);
      const sensoryScore = Object.entries(profile?.sensory || {}).reduce((total, [key, selected]) => total + (selected && (recipe.tags.includes(sensoryLabels[key]) || recipe.texture === sensoryLabels[key]) ? 2 : 0), 0);
      return dietaryScore + sensoryScore;
    };
    return score(second) - score(first);
  }).slice(0, 3);
  const nextMeal = todaysMeals.find((meal) => meal.recipe && meal.status !== "Concluído");

  return (
    <div className="page-shell">
      <Header title="Olá! O que vamos preparar hoje?" subtitle={formatDate()} />

      <section className="home-overview">
        <div className="next-meal-section">
          <div className="section-heading"><h2>Próxima refeição</h2></div>
          {nextMeal ? <>
            <div className="next-meal">
              <div><span className="small-label">{nextMeal.meal} · {nextMeal.schedule}</span><h2>{nextMeal.recipe.title}</h2></div>
              <div className="next-meal-meta"><span>{nextMeal.recipe.time} min</span><span>{nextMeal.recipe.texture} · {nextMeal.recipe.temperature}</span></div>
            </div>
            <Link to={`/cozinha/${nextMeal.recipe.id}`} className="primary-button">Começar preparo</Link>
          </> : <div className="empty-inline"><strong>Nenhuma refeição planejada</strong><span>Escolha uma receita no planejamento para ver a próxima aqui.</span><Link to="/planejamento" className="text-button">Abrir planejamento</Link></div>}
        </div>

        <div className="today-summary"><div className="section-heading"><h2>Hoje</h2></div><span className="today-date">{formatDate()}</span><div className="mini-schedule">{todaysMeals.map((meal) => <div key={meal.meal} className="mini-row"><span>{meal.schedule}</span><strong>{meal.meal}</strong><span className="mini-status">{meal.status}</span></div>)}</div></div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Receitas para hoje</h2>
          <Link to="/receitas">Ver todas</Link>
        </div>

        <div className="recipe-grid">
          {recommended.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} favorite={favorites.includes(recipe.id)} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Sua rotina</h2>
        </div>

        <div className="meal-grid">
          {todaysMeals.map((meal) => (
            <MealCard key={meal.meal} meal={meal.meal} title={meal.recipe ? meal.recipe.title : "Nenhuma refeição planejada"} time={meal.schedule} texture={meal.texture} status={meal.status} />
          ))}
        </div>
      </section>
    </div>
  );
}

