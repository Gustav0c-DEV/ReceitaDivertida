import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import RecipeFilters from "../components/RecipeFilters";
import { categoryOptions, preferenceOptions, restrictionOptions, textureOptions } from "../data/recipes";

export default function RecipesPage({ recipes, favorites, onToggleFavorite }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedTexture, setSelectedTexture] = useState("Todas");
  const [selectedRestriction, setSelectedRestriction] = useState("");
  const [selectedPreference, setSelectedPreference] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesQuery =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.category.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.join(" ").toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchesCategory = selectedCategory === "Todas" || recipe.category === selectedCategory;
      const matchesTexture = selectedTexture === "Todas" || recipe.texture === selectedTexture;
      const matchesRestriction = !selectedRestriction || recipe.tags.includes(selectedRestriction);
      const matchesPreference = !selectedPreference || recipe.tags.includes(selectedPreference) || recipe.texture === selectedPreference || recipe.temperature === selectedPreference;

      return matchesQuery && matchesCategory && matchesTexture && matchesRestriction && matchesPreference;
    });
  }, [query, recipes, selectedCategory, selectedTexture, selectedRestriction, selectedPreference]);

  useEffect(() => setPage(1), [query, selectedCategory, selectedTexture, selectedRestriction, selectedPreference]);

  const pageCount = Math.max(1, Math.ceil(filteredRecipes.length / pageSize));
  const visibleRecipes = filteredRecipes.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="page-shell">
      <Header title="Receitas" subtitle="Filtre por categoria, textura ou tempo de preparo." />

      <RecipeFilters
        query={query}
        setQuery={setQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTexture={selectedTexture}
        setSelectedTexture={setSelectedTexture}
        selectedRestriction={selectedRestriction}
        setSelectedRestriction={setSelectedRestriction}
        selectedPreference={selectedPreference}
        setSelectedPreference={setSelectedPreference}
        filters={{ categories: categoryOptions, textures: textureOptions, restrictions: restrictionOptions, preferences: preferenceOptions }}
        onClear={() => {
          setQuery("");
          setSelectedCategory("Todas");
          setSelectedTexture("Todas");
          setSelectedRestriction("");
          setSelectedPreference("");
        }}
      />

      <div className="results-summary">
        <strong>{filteredRecipes.length} receitas</strong>
        <span>{filteredRecipes.length ? `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, filteredRecipes.length)} de ${filteredRecipes.length}` : "Nenhum resultado"}</span>
      </div>

      <div className="recipe-grid">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} favorite={favorites.includes(recipe.id)} onToggleFavorite={onToggleFavorite} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="empty-state">
          <h3>Nenhuma receita encontrada</h3>
          <p>Tente outra busca ou ajuste os filtros.</p>
        </div>
      )}

      {filteredRecipes.length > 0 && <nav className="pagination" aria-label="Paginação de receitas">
        <button type="button" className="pagination-button" disabled={page === 1} onClick={() => setPage((current) => current - 1)}>← Anterior</button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button type="button" key={number} className={`pagination-number ${page === number ? "active" : ""}`} onClick={() => setPage(number)}>{number}</button>)}
        <button type="button" className="pagination-button" disabled={page === pageCount} onClick={() => setPage((current) => current + 1)}>Próxima →</button>
      </nav>}
    </div>
  );
}
