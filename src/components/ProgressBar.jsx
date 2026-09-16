import React from "react";
export default function ProgressBar({ value, total }) {
  const percentage = total ? Math.max(0, Math.min(100, (value / total) * 100)) : 0;

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-label="Progresso da receita"
      aria-valuemin="0"
      aria-valuemax={total}
      aria-valuenow={value}
    >
      <span style={{ width: `${percentage}%` }} />
    </div>
  );
}

