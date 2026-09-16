import React, { useMemo, useState } from "react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function CookingMode({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((item) => item.id === Number(id));
  const [stepIndex, setStepIndex] = useState(0);

  if (!recipe) {
    return (
      <div className="page-shell">
        <button type="button" className="back-link" onClick={() => navigate("/receitas")}>Voltar</button>
        <div className="empty-state"><h3>Receita não encontrada</h3></div>
      </div>
    );
  }

  const currentStep = recipe.steps[stepIndex];

  const speakInstruction = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentStep);
      utterance.lang = "pt-BR";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="page-shell cooking-page">
      <div className="cooking-topbar">
        <button type="button" className="back-link" onClick={() => navigate(`/receitas/${recipe.id}`)}>
          <ArrowLeft size={16} /> Sair do modo cozinha
        </button>
      </div>

      <div className="cooking-card">
        <span className="eyebrow">MODO COZINHA</span>
        <p className="step-counter">Passo {stepIndex + 1} de {recipe.steps.length}</p>
        <ProgressBar value={stepIndex + 1} total={recipe.steps.length} />

        <div key={stepIndex} className="cooking-instruction" aria-live="polite">
          <h1>{currentStep}</h1>
        </div>

        <button type="button" className="secondary-button cooking-button" onClick={speakInstruction}>
          <Volume2 size={17} /> Ouvir instrução
        </button>

        <div className="cooking-actions">
          <button type="button" className="secondary-button" disabled={stepIndex === 0} onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}>
            Voltar
          </button>

          {stepIndex < recipe.steps.length - 1 ? (
            <button type="button" className="primary-button" onClick={() => setStepIndex((prev) => prev + 1)}>
              Próximo
            </button>
          ) : (
            <button type="button" className="primary-button" onClick={() => navigate("/")}>
              Receita concluída!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
