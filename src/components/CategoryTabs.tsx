import React, { useState } from "react";
import type { Category, Mode } from "../api/products";
import { Moon, Plane, Laptop, Dumbbell } from "lucide-react";

interface CategoryTabsProps {
  categories: Category[];
  mode: Mode;
  title: string;
}

const iconMap: Record<string, React.ReactNode> = {
  sleep: <Moon size={24} strokeWidth={1.5} />,
  travel: <Plane size={24} strokeWidth={1.5} />,
  wfh: <Laptop size={24} strokeWidth={1.5} />,
  gym: <Dumbbell size={24} strokeWidth={1.5} />,
};

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, mode, title }) => {
  const [active, setActive] = useState(categories[0].id);
  const isCouple = mode === "couple";

  return (
    <div style={{ marginBottom: 8 }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: isCouple ? "italic" : "normal",
          fontSize: "clamp(20px, 2vw, 28px)",
          color: isCouple ? "#c0392b" : "#2c3e50",
          textAlign: "center",
          marginBottom: 24,
          transition: "color 0.6s ease",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                padding: "12px 20px",
                borderRadius: 16,
                border: isActive
                  ? `2px solid ${isCouple ? "#e74c3c" : "#e67e22"}`
                  : `2px solid #eaeaea`,
                background: isActive
                  ? (isCouple ? "rgba(231,76,60,0.08)" : "rgba(230,126,34,0.08)")
                  : "#fff",
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: isActive ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isActive
                  ? (isCouple ? "0 4px 20px rgba(231,76,60,0.15)" : "0 4px 20px rgba(230,126,34,0.15)")
                  : "0 2px 10px rgba(0,0,0,0.02)",
                minWidth: 90,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: isActive
                    ? (isCouple ? "linear-gradient(135deg, #e74c3c, #c0392b)" : "linear-gradient(135deg, #f39c12, #d35400)")
                    : "#f5f5f5",
                  color: isActive ? "#fff" : "#555",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease, color 0.3s ease",
                }}
              >
                {iconMap[cat.id] || "✨"}
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive
                    ? (isCouple ? "#c0392b" : "#d35400")
                    : "#666",
                  letterSpacing: "0.02em",
                  transition: "color 0.3s ease",
                }}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
