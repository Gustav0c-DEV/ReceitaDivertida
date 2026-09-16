import React from "react";
import { ArrowLeft, Clock3, Play, Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import RecipeImage from "../components/RecipeImage";

export default function RecipeDetails({ recipes, favorites, onToggleFavorite, onAddToPlanner }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <div className="page-shell">
        <button type="button" className="back-link" onClick={() => navigate("/receitas")}>
          <ArrowLeft size={16} /> Voltar
        </button>
        <div className="empty-state">
          <h3>Receita não encontrada</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell recipe-details-page">
      <button type="button" className="back-link" onClick={() => navigate("/receitas")}>
        <ArrowLeft size={16} /> Voltar para receitas
      </button>

      <div className="recipe-detail-layout">
        <div className="recipe-detail-visual">
          <RecipeImage src={recipe.image} className="recipe-detail-photo" />
          <div className="detail-badge"><Clock3 size={14} /> {recipe.time} min</div>
        </div>

        <div className="recipe-detail-info">
          <div className="tag-row">
            {recipe.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>

          <h1>{recipe.title}</h1>
          <p className="recipe-lead">{recipe.description}</p>

          <div className="detail-stats">
            <div>
              <small>Textura</small>
              <strong>{recipe.texture}</strong>
            </div>
            <div>
              <small>Dificuldade</small>
              <strong>{recipe.difficulty}</strong>
            </div>
            <div>
              <small>Categoria</small>
              <strong>{recipe.category}</strong>
            </div>
            <div>
              <small>Temperatura</small>
              <strong>{recipe.temperature}</strong>
            </div>
          </div>

          <div className="detail-actions">
            <FavoriteButton active={favorites.includes(recipe.id)} onClick={() => onToggleFavorite(recipe.id)} />
            <button type="button" className="primary-button" onClick={() => navigate(`/cozinha/${recipe.id}`)}>
              <Play size={16} /> Começar modo cozinha
            </button>
            <button type="button" className="secondary-button" onClick={() => onAddToPlanner(recipe)}>
              <Plus size={16} /> Adicionar ao planejamento
            </button>
          </div>
        </div>
      </div>

      <div className="ingredients-steps">
        <section className="detail-section">
          <h2>Ingredientes</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}><span /> {ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Modo de preparo</h2>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={step}><b>{index + 1}</b><span>{step}</span></li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

