import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder = "Buscar receitas..." }) {
  return (
    <label className="search-bar">
      <Search size={18} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Buscar receitas"
      />
    </label>
  );
}

