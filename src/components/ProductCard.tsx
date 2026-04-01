import React, { useState } from "react";
import type { Product, Mode } from "../api/products";

interface ProductCardProps {
  product: Product;
  mode: Mode;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, mode, delay = 0 }) => {
  const isCouple = mode === "couple";
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isCouple ? "#fff" : "#111",
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${isCouple ? "#f0e4e4" : "#222"}`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? isCouple
            ? "0 16px 40px rgba(192,57,43,0.18)"
            : "0 16px 40px rgba(0,0,0,0.5)"
          : isCouple
          ? "0 4px 16px rgba(0,0,0,0.08)"
          : "0 4px 16px rgba(0,0,0,0.3)",
        animationDelay: `${delay}ms`,
        animation: "fadeInUp 0.5s ease both",
      }}
    >
      {/* Product image area */}
      <div
        style={{
          position: "relative",
          height: 180,
          background: isCouple
            ? `linear-gradient(135deg, #fdf2f2 0%, #fce4e4 100%)`
            : `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "background 0.6s ease",
        }}
      >
        {/* Stylized product visual */}
        <div
          style={{
            width: 100,
            height: 120,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${product.imageColor}dd, ${product.imageColor}88)`,
            boxShadow: `0 8px 30px ${product.imageColor}55`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            transform: hovered ? "scale(1.06) rotate(-2deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          🦶
        </div>

        {/* Rating */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: isCouple ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.7)",
            borderRadius: 20,
            padding: "4px 10px",
            fontSize: 11,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            color: isCouple ? "#333" : "#eee",
          }}
        >
          <span style={{ color: "#f39c12" }}>★</span>
          {product.rating} ({product.reviews}+)
        </div>

        {/* Color dots */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            gap: 4,
          }}
        >
          {["#e74c3c", "#3498db", "#2ecc71"].map((c) => (
            <div
              key={c}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: c,
                border: "1.5px solid rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Product info */}
      <div style={{ padding: "16px 16px 20px" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: isCouple ? "#1a1a1a" : "#e5e5e5",
            marginBottom: 4,
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            color: isCouple ? "#999" : "#666",
            marginBottom: 10,
          }}
        >
          {product.tagline}
        </div>

        {/* Badge + price row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          <span
            style={{
              background: isCouple ? "#fff0f0" : "#2a0a0a",
              color: isCouple ? "#e74c3c" : "#ff6b6b",
              border: `1px solid ${isCouple ? "#fcc" : "#5a1515"}`,
              borderRadius: 4,
              padding: "2px 7px",
              fontSize: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}
          >
            {product.badge}
          </span>
          <span
            style={{
              background: isCouple ? "#e8f5e9" : "#0a1e0a",
              color: "#27ae60",
              borderRadius: 4,
              padding: "2px 7px",
              fontSize: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            {product.discountPercent}% OFF
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: isCouple ? "#bbb" : "#555",
              textDecoration: "line-through",
            }}
          >
            ₹{product.mrp}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 20,
              fontWeight: 800,
              color: isCouple ? "#1a1a1a" : "#f0f0f0",
            }}
          >
            ₹{product.salePrice}
          </span>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 50,
            border: "none",
            background: added
              ? "#27ae60"
              : isCouple
              ? "#FFD700"
              : "#E74C3C",
            color: added ? "#fff" : isCouple ? "#7b3a0a" : "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.04em",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.15s ease",
            transform: hovered && !added ? "scale(1.02)" : "scale(1)",
          }}
        >
          {added ? "✓ Added!" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
