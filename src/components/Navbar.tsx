import React from "react";
import type { Mode } from "../api/products";
import { Menu, User, Search, ShoppingBag } from "lucide-react";

interface NavbarProps {
  mode: Mode;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(252, 250, 248, 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #eaeaea",
        padding: "0 48px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.6s ease, border-color 0.6s ease",
      }}
    >
      {/* Left icons */}
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <NavIcon><Menu size={20} strokeWidth={1.5} /></NavIcon>
        <NavIcon><User size={20} strokeWidth={1.5} /></NavIcon>
      </div>

      {/* Logo */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#1a1a1a",
          transition: "color 0.6s ease",
        }}
      >
        frido
      </div>

      {/* Right icons */}
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <NavIcon><Search size={20} strokeWidth={1.5} /></NavIcon>
        <NavIcon><ShoppingBag size={20} strokeWidth={1.5} /></NavIcon>
      </div>
    </nav>
  );
};

const NavIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      opacity: 0.7,
      color: "#1a1a1a",
      transition: "opacity 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.opacity = "1";
      e.currentTarget.style.transform = "scale(1.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.opacity = "0.7";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </span>
);

export default Navbar;
