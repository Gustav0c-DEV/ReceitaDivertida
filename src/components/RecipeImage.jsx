import React, { useState } from "react";

function getFoodEmoji(label = "") {
  const name = label.toLowerCase();
  if (/banana|panqueca|crepioca|tapioca|waffle/.test(name)) return "🥞";
  if (/maçã|maca|canela|fruta|morango|manga|abacate/.test(name)) return "🍎";
  if (/omelete|ovo/.test(name)) return "🍳";
  if (/mingau|aveia|iogurte|granola/.test(name)) return "🥣";
  if (/cuscuz/.test(name)) return "🌽";
  if (/pão|torrada|sanduíche|sanduiche|wrap/.test(name)) return "🥪";
  if (/arroz|risoto|quinoa|lentilha/.test(name)) return "🍚";
  if (/macarrão|macarrao|lasanha|nhoque/.test(name)) return "🍝";
  if (/frango|carne|bife|almôndega|almondega|quibe/.test(name)) return "🍗";
  if (/peixe|tilápia|tilapia|atum/.test(name)) return "🐟";
  if (/sopa|caldo|creme|purê|pure/.test(name)) return "🍲";
  if (/salada|legumes|cenoura/.test(name)) return "🥗";
  if (/bolo|muffin|cookie|biscoito|pudim|mousse|sobremesa/.test(name)) return "🧁";
  if (/suco|vitamina|smoothie|chá|cha|café|cafe/.test(name)) return "🥤";
  return "🍽️";
}

export default function RecipeImage({ src, alt = "", className = "" }) {
  const [failed, setFailed] = useState(!src);
  if (failed) {
    return (
      <div className={`recipe-image-placeholder ${className}`} role="img" aria-label={alt || "Ilustração de comida"}>
        <span className="recipe-food-emoji" aria-hidden="true">{getFoodEmoji(alt)}</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}
