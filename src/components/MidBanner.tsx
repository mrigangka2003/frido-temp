import React from "react";
import type { Mode } from "../api/products";
import { giftCategories } from "../api/products";
import { HeartHandshake, Smile, Users, Baby, User, Gift } from "lucide-react";

interface MidBannerProps {
  mode: Mode;
}

const giftIconMap: Record<string, React.ReactNode> = {
  mom: <User size={20} strokeWidth={1.5} />,
  dad: <User size={20} strokeWidth={1.5} />,
  bff: <Users size={20} strokeWidth={1.5} />,
  kids: <Baby size={20} strokeWidth={1.5} />,
};

const MidBanner: React.FC<MidBannerProps> = ({ mode }) => {
  const isCouple = mode === "couple";

  const bannerBg = isCouple
    ? "linear-gradient(135deg, #fff5f5 0%, #fce8e8 100%)"
    : "linear-gradient(135deg, #fdf8f4 0%, #f7ebe1 100%)";

  const imageBg = isCouple
    ? "linear-gradient(135deg, #ffe4e4 0%, #ffc9c9 100%)"
    : "linear-gradient(135deg, #fae5d3 0%, #f5cba7 100%)";

  return (
    <div
      style={{
        borderRadius: 32,
        overflow: "hidden",
        margin: "48px 0",
        background: bannerBg,
        padding: "48px 40px",
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexWrap: "wrap",
        transition: "background 0.8s ease",
        border: `1px solid ${isCouple ? "#f5d0d0" : "#e0cdbb"}`,
      }}
    >
      {/* Illustration area */}
      <div
        style={{
          flex: "0 0 280px",
          height: 260,
          borderRadius: 24,
          background: imageBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.8s ease",
          position: "relative",
          overflow: "hidden",
          color: isCouple ? "#c0392b" : "#d35400",
        }}
      >
        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: `2px solid ${isCouple ? "rgba(231,76,60,0.2)" : "rgba(211,84,0,0.2)"}`,
          }}
        />
        <div style={{ zIndex: 1, filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.08))", display: 'flex' }}>
          {isCouple ? <HeartHandshake size={64} strokeWidth={1.5} /> : <Smile size={64} strokeWidth={1.5} />}
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
                color: "#666",
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
                color: "#2c3e50",
                letterSpacing: "0.05em",
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
                    border: "1px solid #eaeaea",
                    background: "#fff",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    minWidth: 70,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#e67e22";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(230,126,34,0.1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#eaeaea";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#f9f9f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#555",
                      transition: "color 0.2s",
                    }}
                  >
                    {giftIconMap[cat.id] || <Gift size={20} strokeWidth={1.5} />}
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      color: "#666",
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
            background: isCouple ? "#E74C3C" : "#e67e22",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            boxShadow: isCouple ? "0 6px 20px rgba(231,76,60,0.3)" : "0 6px 20px rgba(230,126,34,0.3)",
            letterSpacing: "0.04em",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = isCouple ? "0 10px 28px rgba(231,76,60,0.4)" : "0 10px 28px rgba(230,126,34,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = isCouple ? "0 6px 20px rgba(231,76,60,0.3)" : "0 6px 20px rgba(230,126,34,0.3)";
          }}
        >
          {isCouple ? "Shop Together" : "Shop for Them"} <Gift size={16} />
        </button>
      </div>
    </div>
  );
};

export default MidBanner;
