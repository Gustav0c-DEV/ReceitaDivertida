import React from "react";
import { Bell } from "lucide-react";
import MealTypeIcon from "./MealTypeIcon";

export default function ReminderCard({ label, time, enabled, onToggle, onChange }) {
  return (
    <div className="reminder-card">
      <div className="reminder-meal-label">
        <span className="meal-type-icon"><MealTypeIcon meal={label} size={20} /></span>
        <div>
          <strong>{label}</strong>
          <p>Horário da refeição</p>
        </div>
      </div>

      <div className="reminder-actions">
        <input type="time" value={time} onChange={(event) => onChange(event.target.value)} aria-label={`Horário de ${label}`} />
        <button type="button" className={`switch ${enabled ? "on" : ""}`} onClick={onToggle} aria-label={`Ativar lembrete de ${label}`}>
          <span />
        </button>
      </div>
    </div>
  );
}
