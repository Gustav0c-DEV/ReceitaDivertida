import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Modal from "./Modal";
import RecipeImage from "./RecipeImage";

export default function PlannerModal({ open, recipes, selectedMeal, onClose, onChoose }) {
  const [query, setQuery] = useState("");
  const list = useMemo(() => recipes || [], [recipes]);
  const filteredList = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return list;
    return list.filter((recipe) => `${recipe.title} ${recipe.category} ${recipe.tags.join(" ")} ${recipe.ingredients.join(" ")}`.toLowerCase().includes(normalizedQuery));
  }, [list, query]);

  return (
    <Modal open={open} title={selectedMeal ? `Adicionar ao ${selectedMeal.meal} · ${selectedMeal.day}` : "Selecionar receita"} onClose={onClose}>
      <div className="planner-modal-list">
        <label className="planner-modal-search">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar entre 100 receitas" />
        </label>
        {filteredList.map((recipe) => (
          <button
            key={recipe.id}
            type="button"
            className="planner-choice"
            onClick={() => onChoose(recipe)}
          >
            <RecipeImage src={recipe.image} className="planner-choice-image" />
            <div>
              <strong>{recipe.title}</strong>
              <small>{recipe.category} · {recipe.time} min</small>
            </div>
          </button>
        ))}
        {!filteredList.length && <p className="planner-modal-empty">Nenhuma receita encontrada.</p>}
      </div>
    </Modal>
  );
}
