import React from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage({ recipes, favorites, onToggleFavorite }) {
  const savedRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div className="page-shell">
      <Header title="Favoritos" subtitle="Receitas guardadas para voltar quando quiser." />

      {savedRecipes.length > 0 ? (
        <div className="recipe-grid">
          {savedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} favorite onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>Você ainda não marcou favoritos</h3>
          <p>Toque no coração de uma receita para salvá-la aqui.</p>
        </div>
      )}
    </div>
  );
}

