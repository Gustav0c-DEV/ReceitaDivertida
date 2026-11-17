import React, { useState } from "react";
import { ChefHat } from "lucide-react";

export default function RecipeImage({ src, alt = "", className = "" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`recipe-image-placeholder ${className}`}
        role="img"
        aria-label={alt || "Ícone de receita"}
      >
        <ChefHat size={56} strokeWidth={1.5} aria-hidden="true" />
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}
