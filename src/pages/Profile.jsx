import React from "react";
import Header from "../components/Header";
import AccessibilitySettings from "../components/AccessibilitySettings";

export default function ProfilePage({ profile, setProfile }) {
  const setSetting = (key, value) => {
    setProfile((previous) => ({ ...previous, [key]: value }));
  };

  const toggleSelection = (group, key) => {
    setProfile((previous) => ({
      ...previous,
      [group]: {
        ...previous[group],
        [key]: !previous[group][key]
      }
    }));
  };

  return (
    <div className="page-shell">
      <Header title="Perfil e acessibilidade" subtitle="Ajuste a interface e suas preferências." />

      <div className="profile-grid">
        <section className="settings-panel">
          <h2>Aparência</h2>
          <AccessibilitySettings settings={profile} onChange={setSetting} />
        </section>

        <section className="settings-panel">
          <h2>Preferências alimentares</h2>
          <div className="selection-list">
            {Object.entries({
              gluten: "Sem glúten",
              lactose: "Sem lactose",
              sugar: "Sem açúcar",
              vegetarian: "Vegetariana"
            }).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`selection-item ${profile.dietary[key] ? "selected" : ""}`}
                onClick={() => toggleSelection("dietary", key)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="settings-panel">
          <h2>Preferências sensoriais</h2>
          <div className="selection-list">
            {Object.entries({
              soft: "Textura macia",
              creamy: "Textura cremosa",
              crunchy: "Textura crocante",
              liquid: "Textura líquida",
              mild: "Sabor suave",
              fewIngredients: "Poucos ingredientes"
            }).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`selection-item ${profile.sensory[key] ? "selected" : ""}`}
                onClick={() => toggleSelection("sensory", key)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

