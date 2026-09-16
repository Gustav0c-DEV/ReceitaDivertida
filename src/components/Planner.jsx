import React, { useMemo } from "react";
import { weekDays, mealOptions } from "../data/recipes";
import RecipeImage from "./RecipeImage";

export default function Planner({ planner, onSelectCell, onClearCell }) {
  const rows = useMemo(() => {
    return mealOptions.map((meal) => ({
      meal,
      cells: weekDays.map((day) => {
        const entry = planner[`${day}-${meal}`];
        const recipeId = typeof entry === "object" ? entry.recipeId : entry;
        const recipe = recipeId ? planner.recipeMap[recipeId] : null;

        return { day, meal, recipe, status: typeof entry === "object" ? entry.status : "Planejado" };
      })
    }));
  }, [planner]);

  return (
    <div className="planner-grid">
      <div className="planner-header">
        <div className="planner-label">Refeição</div>
        {weekDays.map((day) => (
          <div key={day} className="planner-day-header">{day}</div>
        ))}
      </div>

      {rows.map(({ meal, cells }) => (
        <div key={meal} className="planner-row">
          <div className="planner-label">{meal}</div>
          {cells.map(({ day, recipe, status }) => (
            <button
              key={`${day}-${meal}`}
              type="button"
              className={`planner-cell ${recipe ? "filled" : ""}`}
              onClick={() => (recipe ? onClearCell(day, meal) : onSelectCell(day, meal))}
            >
              {recipe ? (
                <>
                  <RecipeImage src={recipe.image} className="planner-image" />
                  <small>{recipe.title}</small>
                  <em>{status}</em>
                </>
              ) : (
                <span className="planner-plus">＋</span>
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
