import React from "react";
import type { Mode } from "../api/products";
import { giftCategories } from "../api/products";

interface MidBannerProps {
  mode: Mode;
}

const MidBanner: React.FC<MidBannerProps> = ({ mode }) => {
  const isCouple = mode === "couple";

  return (
    <div
      style={{
        borderRadius: 32,
        overflow: "hidden",
        margin: "48px 0",
        background: isCouple
          ? "linear-gradient(135deg, #fff5f5 0%, #fce8e8 100%)"
          : "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)",
        padding: "48px 40px",
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexWrap: "wrap",
        transition: "background 0.8s ease",
        border: `1px solid ${isCouple ? "#f5d0d0" : "#222"}`,
      }}
    >
      {/* Illustration area */}
      <div
        style={{
          flex: "0 0 280px",
          height: 260,
          borderRadius: 24,
          background: isCouple
            ? "linear-gradient(135deg, #ffe4e4 0%, #ffc9c9 100%)"
            : "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 72,
          transition: "background 0.8s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: `2px solid ${isCouple ? "rgba(231,76,60,0.2)" : "rgba(255,255,255,0.05)"}`,
          }}
        />
        <div style={{ zIndex: 1, filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.15))" }}>
          {isCouple ? "💑" : "🧗"}
        </div>
      </div>

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 260 }}>
        {isCouple ? (
          <>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                color: "#c0392b",
                marginBottom: 24,
                lineHeight: 1.3,
              }}
            >
              Match Made in Comfort
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "#888",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Because the best gift you can give someone you love is the gift of comfort. Walk together, pain-free.
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(20px, 2.2vw, 30px)",
                color: "#f5f5f5",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              Or… Pamper Who
              <br />
              Matters To You
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
              {giftCategories.map((cat) => (
                <button
                  key={cat.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 16px",
                    borderRadius: 14,
                    border: "1.5px solid #2a2a2a",
                    background: "#181818",
                    cursor: "pointer",
                    transition: "border-color 0.2s, transform 0.2s",
                    minWidth: 70,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#E74C3C";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#2a2a2a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#242424",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#888",
                      fontWeight: 500,
                    }}
                  >
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        <button
          style={{
            padding: "13px 32px",
            borderRadius: 50,
            border: "none",
            background: isCouple ? "#E74C3C" : "#E74C3C",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(231,76,60,0.4)",
            letterSpacing: "0.04em",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(231,76,60,0.5)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(231,76,60,0.4)";
          }}
        >
          {isCouple ? "Shop Together →" : "Shop for Them →"}
        </button>
      </div>
    </div>
  );
};

export default MidBanner;
