import React from "react";
import { ArrowRight, Check, Circle } from "lucide-react";

export default function MealCard({ meal, title, time, texture, status = "Planejada" }) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  const StatusIcon = status === "Concluído" ? Check : status === "Planejado" ? ArrowRight : Circle;
  return <div className="meal-row"><span className="meal-time">{time}</span><strong>{meal}</strong><span className="meal-recipe">{title}</span><span className={`status-pill ${statusClass}`}><StatusIcon size={14} /> {status}</span></div>;
}

