import React from "react";
import { Coffee, Utensils, Cookie, Moon } from "lucide-react";

const mealIcons = {
  "Café da manhã": Coffee,
  "Almoço": Utensils,
  "Lanche": Cookie,
  "Jantar": Moon
};

export default function MealTypeIcon({ meal, size = 18, className = "" }) {
  const Icon = mealIcons[meal] || Utensils;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
