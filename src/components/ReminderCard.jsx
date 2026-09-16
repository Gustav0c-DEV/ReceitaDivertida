import React from "react";
import { Bell, BellOff } from "lucide-react";

export default function ReminderCard({ label, time, enabled, onToggle, onChange }) {
  return (
    <div className="reminder-card">
      <div>
        <strong>{label}</strong>
        <p>Horário da refeição</p>
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

