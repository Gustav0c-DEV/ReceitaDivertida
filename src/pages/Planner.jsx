import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import PlannerGrid from "../components/Planner";
import PlannerModal from "../components/PlannerModal";
import { mealOptions, weekDays } from "../data/recipes";

export default function PlannerPage({ recipes, planner, setPlanner }) {
  const [selectedCell, setSelectedCell] = useState(null);

  const recipeMap = useMemo(() => {
    return Object.fromEntries(recipes.map((recipe) => [recipe.id, recipe]));
  }, [recipes]);

  const updatePlanner = (day, meal, recipeId) => {
    setPlanner((previous) => ({
      ...previous,
      [`${day}-${meal}`]: { recipeId, status: "Planejado" }
    }));
  };

  const openCell = (day, meal) => {
    setSelectedCell({ day, meal });
  };

  const clearCell = (day, meal) => {
    setPlanner((previous) => {
      const next = { ...previous };
      delete next[`${day}-${meal}`];
      return next;
    });
  };

  const handleChooseRecipe = (recipe) => {
    if (!selectedCell) return;

    updatePlanner(selectedCell.day, selectedCell.meal, recipe.id);
    setSelectedCell(null);
  };

  const plannerState = { ...planner, recipeMap };

  return (
    <div className="page-shell">
      <Header title="Planejamento semanal" subtitle="Escolha uma receita para cada horário." />

      <PlannerGrid planner={plannerState} onSelectCell={openCell} onClearCell={clearCell} />

      <PlannerModal
        open={Boolean(selectedCell)}
        recipes={recipes}
        selectedMeal={selectedCell}
        onClose={() => setSelectedCell(null)}
        onChoose={handleChooseRecipe}
      />
    </div>
  );
}
