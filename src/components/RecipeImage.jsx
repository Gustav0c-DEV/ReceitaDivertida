import React, { useState } from "react";
import { ImageOff } from "lucide-react";

export default function RecipeImage({ src, alt = "", className = "" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`recipe-image-placeholder ${className}`} role="img" aria-label="Imagem da receita indisponível">
        <ImageOff size={18} />
        <span>Imagem indisponível</span>
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />;
}
