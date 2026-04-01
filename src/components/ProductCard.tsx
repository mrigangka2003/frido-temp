import React, { useState } from "react";
import type { Product, Mode } from "../api/products";
import { Footprints, Star } from "lucide-react";

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

  const imageBackground = isCouple
    ? "linear-gradient(135deg, #fdf2f2 0%, #fce4e4 100%)"
    : "linear-gradient(135deg, #fdf8f4 0%, #f7ebe1 100%)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #eaeaea",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? isCouple
            ? "0 16px 40px rgba(192,57,43,0.12)"
            : "0 16px 40px rgba(230,126,34,0.12)"
          : "0 4px 16px rgba(0,0,0,0.03)",
        animationDelay: `${delay}ms`,
        animation: "fadeInUp 0.5s ease both",
      }}
    >
      {/* Product image area */}
      <div
        style={{
          position: "relative",
          height: 180,
          background: imageBackground,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "background 0.6s ease",
        }}
      >
        {/* Product visual: real image or stylised placeholder */}
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        ) : (
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
              color: "#fff",
              transform: hovered ? "scale(1.06) rotate(-2deg)" : "scale(1) rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <Footprints size={48} strokeWidth={1.5} />
          </div>
        )}

        {/* Rating */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(255,255,255,0.9)",
            borderRadius: 20,
            padding: "4px 10px",
            fontSize: 11,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            color: "#333",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Star size={12} fill="#f39c12" color="#f39c12" />
          {product.rating} ({product.reviews}+)
        </div>

        {/* Color dots */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
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
                border: "1.5px solid rgba(255,255,255,0.8)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
            fontSize: 14,
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: 4,
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "#777",
            marginBottom: 12,
          }}
        >
          {product.tagline}
        </div>

        {/* Badge + price row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          <span
            style={{
              background: isCouple ? "#fff0f0" : "#fbf0e6",
              color: isCouple ? "#e74c3c" : "#d35400",
              border: `1px solid ${isCouple ? "#fcc" : "#faceac"}`,
              borderRadius: 6,
              padding: "3px 8px",
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
              background: "#e8f5e9",
              color: "#27ae60",
              borderRadius: 6,
              padding: "4px 8px",
              fontSize: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            {product.discountPercent}% OFF
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "#999",
              textDecoration: "line-through",
            }}
          >
            ₹{product.mrp}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 22,
              fontWeight: 800,
              color: "#1a1a1a",
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
              ? "#FFE566"
              : "#e67e22",
            color: added ? "#fff" : isCouple ? "#7b3a0a" : "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.04em",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.15s ease",
            transform: hovered && !added ? "scale(1.02)" : "scale(1)",
            boxShadow: hovered && !added
              ? isCouple ? "0 4px 15px rgba(255,229,102,0.4)" : "0 4px 15px rgba(230,126,34,0.3)"
              : "none",
          }}
        >
          {added ? "✓ Added!" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
