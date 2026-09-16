import React from "react";
export default function Header({ title, subtitle }) {
  return (
    <header className="content-header">
      <div>
        <p className="eyebrow">RECEITA DIVERTIDA</p>
        <h1>{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>

    </header>
  );
}

