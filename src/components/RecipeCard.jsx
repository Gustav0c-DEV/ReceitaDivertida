import React from "react";
import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import RecipeImage from "./RecipeImage";

export default function RecipeCard({ recipe, favorite, onToggleFavorite }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-header">
        <RecipeImage src={recipe.image} className="recipe-card-photo" />
        <FavoriteButton active={favorite} onClick={() => onToggleFavorite(recipe.id)} />
      </div>

      <div className="recipe-card-body">
        <div className="tag-row">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        <Link to={`/receitas/${recipe.id}`} className="recipe-link">
          <h3>{recipe.title}</h3>
        </Link>

        <div className="recipe-meta">
          <span><Clock3 size={14} /> {recipe.time} min</span>
          <span>{recipe.texture}</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}

