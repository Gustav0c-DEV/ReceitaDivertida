import React from "react";
import SearchBar from "./SearchBar";

export default function RecipeFilters({
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTexture,
  setSelectedTexture,
  selectedRestriction,
  setSelectedRestriction,
  selectedPreference,
  setSelectedPreference,
  filters,
  onClear
}) {
  return (
    <section className="filters-panel">
      <SearchBar value={query} onChange={setQuery} />

      <div className="filter-row">
        <div className="filter-group">
          <span>Categoria</span>
          <div className="chip-group">
            {filters.categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip ${selectedCategory === category ? "selected" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span>Textura</span>
          <div className="chip-group">
            {filters.textures.map((texture) => (
              <button
                key={texture}
                type="button"
                className={`chip ${selectedTexture === texture ? "selected" : ""}`}
                onClick={() => setSelectedTexture(texture)}
              >
                {texture}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span>Restrições</span>
          <div className="chip-group">
            {filters.restrictions.map((restriction) => (
              <button
                key={restriction}
                type="button"
                className={`chip ${selectedRestriction === restriction ? "selected" : ""}`}
                onClick={() => setSelectedRestriction(selectedRestriction === restriction ? "" : restriction)}
              >
                {restriction}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span>Preferência</span>
          <div className="chip-group">
            {filters.preferences.map((preference) => (
              <button
                key={preference}
                type="button"
                className={`chip ${selectedPreference === preference ? "selected" : ""}`}
                onClick={() => setSelectedPreference(selectedPreference === preference ? "" : preference)}
              >
                {preference}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button type="button" className="text-button" onClick={onClear}>Limpar filtros</button>
      </div>
    </section>
  );
}

