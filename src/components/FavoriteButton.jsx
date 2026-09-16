import React from "react";
import { Heart } from "lucide-react";

export default function FavoriteButton({ active, onClick }) {
  return (
    <button
      type="button"
      className={`favorite-button ${active ? "active" : ""}`}
      onClick={onClick}
      aria-label={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Heart size={16} fill={active ? "currentColor" : "none"} />
    </button>
  );
}

