import React from "react";
import type { Mode } from "../api/products";

interface NavbarProps {
  mode: Mode;
}

const Navbar: React.FC<NavbarProps> = ({ mode }) => {
  const isCouple = mode === "couple";

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: isCouple ? "rgba(255,255,255,0.97)" : "rgba(10,10,10,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: isCouple ? "1px solid #f0e4e4" : "1px solid #1e1e1e",
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
        <NavIcon mode={mode}>☰</NavIcon>
        <NavIcon mode={mode}>👤</NavIcon>
      </div>

      {/* Logo */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: isCouple ? "#1a1a1a" : "#f5f5f5",
          transition: "color 0.6s ease",
        }}
      >
        frido
      </div>

      {/* Right icons */}
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <NavIcon mode={mode}>🔍</NavIcon>
        <NavIcon mode={mode}>🛍</NavIcon>
      </div>
    </nav>
  );
};

const NavIcon: React.FC<{ mode: Mode; children: React.ReactNode }> = ({
  mode,
  children,
}) => (
  <span
    style={{
      fontSize: 18,
      cursor: "pointer",
      opacity: 0.7,
      transition: "opacity 0.2s",
      filter: mode === "single" ? "brightness(2)" : "none",
    }}
  >
    {children}
  </span>
);

export default Navbar;
