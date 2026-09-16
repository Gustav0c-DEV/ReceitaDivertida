import React from "react";
import { CalendarDays, Heart, Home, Bell, UserRound, ChefHat, LogOut, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "Início", icon: Home },
  { to: "/receitas", label: "Receitas", icon: ChefHat },
  { to: "/planejamento", label: "Planejamento", icon: CalendarDays },
  { to: "/favoritos", label: "Favoritos", icon: Heart },
  { to: "/lembretes", label: "Lembretes", icon: Bell },
  { to: "/perfil", label: "Perfil", icon: UserRound }
];

export default function Sidebar({ darkMode, onToggleDarkMode, user, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <img className="brand-logo" src="/images/recipes/Assets/Logo-transparent.png" alt="Receita Divertida" />
      </div>

      <nav className="sidebar-nav" aria-label="Menu principal">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} end={to === "/"}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleDarkMode}
        aria-pressed={darkMode}
        aria-label={darkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
        title={darkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="sidebar-user">
        <UserRound size={16} />
        <span>{user.name}</span>
        <button type="button" className="logout-button" onClick={onLogout} aria-label="Sair da conta" title="Sair da conta">
          <LogOut size={16} />
        </button>
      </div>

    </aside>
  );
}

