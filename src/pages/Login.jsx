import React, { useState } from "react";
import { ChefHat, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";

const initialForm = { name: "", email: "", password: "" };

export default function LoginPage({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setForm(initialForm);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();

    if (mode === "register") {
      if (!form.name.trim() || !email || !password) {
        setError("Preencha todos os campos para criar sua conta.");
        return;
      }
      if (password.length < 6) {
        setError("A senha precisa ter pelo menos 6 caracteres.");
        return;
      }

      const existingUser = window.localStorage.getItem("rd-user");
      if (existingUser) {
        setError("Já existe uma conta neste navegador. Entre com seus dados.");
        return;
      }

      const user = { name: form.name.trim(), email, password };
      window.localStorage.setItem("rd-user", JSON.stringify(user));
      onLogin(user);
      return;
    }

    const storedUser = window.localStorage.getItem("rd-user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    if (!user || user.email !== email || user.password !== password) {
      setError("E-mail ou senha incorretos.");
      return;
    }

    onLogin(user);
  };

  return (
    <main className="auth-page">
      <section className="auth-intro">
        <div className="auth-brand"><img src="/images/recipes/Assets/Logo-transparent.png" alt="Receita Divertida" /></div>
        <div className="auth-copy">
          <span className="eyebrow">Seu cantinho na cozinha</span>
          <h1>Receitas que cabem na sua rotina.</h1>
          <p>Organize suas refeições, descubra novos sabores e cozinhe no seu ritmo.</p>
        </div>
        <div className="auth-note"><span>🍃</span><p>Seus favoritos e planejamentos ficam guardados neste dispositivo.</p></div>
      </section>

      <section className="auth-panel" aria-labelledby="auth-title">
        <div className="auth-panel-heading">
          <span className="auth-mobile-mark"><ChefHat size={20} /></span>
          <span className="eyebrow">Receita Divertida</span>
          <h2 id="auth-title">{mode === "login" ? "Bem-vindo de volta" : "Crie sua conta"}</h2>
          <p>{mode === "login" ? "Entre para continuar sua jornada." : "Comece a montar sua cozinha ideal."}</p>
        </div>

        <div className="auth-tabs" role="tablist" aria-label="Autenticação">
          <button type="button" className={mode === "login" ? "active" : ""} onClick={() => switchMode("login")}>Entrar</button>
          <button type="button" className={mode === "register" ? "active" : ""} onClick={() => switchMode("register")}>Criar conta</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <label className="auth-field">
              <span>Como podemos chamar você?</span>
              <div><UserRound size={17} /><input name="name" value={form.name} onChange={updateField} placeholder="Seu nome" autoComplete="name" /></div>
            </label>
          )}
          <label className="auth-field">
            <span>E-mail</span>
            <div><Mail size={17} /><input name="email" type="email" value={form.email} onChange={updateField} placeholder="voce@email.com" autoComplete="email" /></div>
          </label>
          <label className="auth-field">
            <span>Senha</span>
            <div><LockKeyhole size={17} /><input name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={updateField} placeholder="Pelo menos 6 caracteres" autoComplete={mode === "login" ? "current-password" : "new-password"} /><button type="button" className="password-toggle" onClick={() => setShowPassword((previous) => !previous)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>
          </label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="primary-button auth-submit" type="submit">{mode === "login" ? "Entrar na minha cozinha" : "Criar minha conta"}</button>
        </form>

        <p className="auth-privacy">Os dados da conta são salvos somente no armazenamento local deste navegador.</p>
      </section>
    </main>
  );
}
