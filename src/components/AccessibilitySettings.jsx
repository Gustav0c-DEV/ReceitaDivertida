import React from "react";
export default function AccessibilitySettings({ settings, onChange }) {
  const toggle = (key) => onChange(key, !settings[key]);

  return (
    <div className="settings-stack">
      <div className="setting-row">
        <div>
          <strong>Modo escuro</strong>
          <p>Reduz a luminosidade geral da interface.</p>
        </div>
        <button type="button" className={`switch ${settings.dark ? "on" : ""}`} onClick={() => toggle("dark")} aria-label={settings.dark ? "Desativar modo escuro" : "Ativar modo escuro"}>
          <span />
        </button>
      </div>

      <div className="setting-row">
        <div>
          <strong>Modo calmante</strong>
          <p>Remove transições e elementos mais chamativos.</p>
        </div>
        <button type="button" className={`switch ${settings.calm ? "on" : ""}`} onClick={() => toggle("calm")} aria-label="Ativar modo calmante">
          <span />
        </button>
      </div>

      <div className="setting-row">
        <div>
          <strong>Contraste</strong>
          <p>Aumenta a diferença entre texto, bordas e superfícies.</p>
        </div>
        <button type="button" className={`switch ${settings.contrast ? "on" : ""}`} onClick={() => toggle("contrast")} aria-label="Ativar alto contraste">
          <span />
        </button>
      </div>

      <div className="setting-row">
        <div>
          <strong>Tamanho da fonte</strong>
          <p>Escolha o tamanho da leitura do app.</p>
        </div>
        <div className="font-options">
          {[
            { value: "small", label: "Pequena" },
            { value: "normal", label: "Normal" },
            { value: "large", label: "Grande" }
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              className={settings.font === option.value ? "selected" : ""}
              onClick={() => onChange("font", option.value)}
            >
              A
              <small>{option.label}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

