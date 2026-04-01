import React, { useEffect, useState } from "react";
import type { Mode } from "../api/products";
import { Heart as HeartIcon, Sparkles, ArrowRight, ArrowLeft, Gift, Star as StarIcon } from "lucide-react";

interface HeroBannerProps {
  mode: Mode;
  onToggleMode: () => void;
}

const Heart: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div style={{ position: "absolute", opacity: 0.4, animation: "float 4s ease-in-out infinite", color: "#fff", ...style }}>
    <HeartIcon fill="currentColor" size={24} />
  </div>
);

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div style={{ position: "absolute", opacity: 0.5, animation: "twinkle 3s ease-in-out infinite", color: "#fff", ...style }}>
    <Sparkles fill="currentColor" size={20} />
  </div>
);

const HeroBanner: React.FC<HeroBannerProps> = ({ mode, onToggleMode }) => {
  const isCouple = mode === "couple";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setVisible(false), 0);
    const showTimer = setTimeout(() => setVisible(true), 80);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [mode]);

  // Keep theme consistent across both modes, maybe shift hue slightly but maintain same brightness/vibe
  const backgroundStyle = isCouple
    ? "linear-gradient(135deg, #c0392b 0%, #e74c3c 40%, #ff6b6b 100%)"
    : "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)";

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: 480,
        background: backgroundStyle,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.8s ease",
      }}
    >
      {/* Decorative background shapes */}
      <div style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -60, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      
      {isCouple ? (
        <>
          <Heart style={{ top: "15%", left: "8%" }} />
          <Heart style={{ top: "60%", left: "12%", transform: "scale(0.7)", animationDelay: "1s" }} />
          <Heart style={{ top: "25%", right: "10%", transform: "scale(0.8)", animationDelay: "0.5s" }} />
          <Heart style={{ bottom: "20%", right: "15%", transform: "scale(1.2)", animationDelay: "1.5s" }} />
        </>
      ) : (
        <>
          <Star style={{ top: "15%", left: "15%" }} />
          <Star style={{ top: "40%", left: "6%", animationDelay: "1s" }} />
          <Star style={{ top: "20%", right: "12%", animationDelay: "0.7s" }} />
          <Star style={{ bottom: "25%", right: "8%", animationDelay: "1.4s" }} />
          <Star style={{ bottom: "15%", left: "20%", animationDelay: "0.3s" }} />
        </>
      )}

      {/* Mode toggle pill */}
      <button
        onClick={onToggleMode}
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: 20,
          padding: "8px 16px",
          fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.04em",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "background 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.background = "rgba(255,255,255,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        }}
      >
        {isCouple ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
        {isCouple ? "Single Mode" : "Couple Mode"}
      </button>

      {/* Hero text */}
      <div
        style={{
          textAlign: "center",
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          padding: "0 24px",
        }}
      >
        {isCouple ? (
          <>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                marginBottom: 16,
              }}
            >
              This Valentine's
              <br />
              Gift Comfort
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 52px)",
                color: "#fff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                lineHeight: 1.15,
                textShadow: "0 2px 20px rgba(0,0,0,0.2)",
                marginBottom: 16,
              }}
            >
              This Valentine's
              <br />
              Be Your Own Bae
            </div>
          </>
        )}

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.02em",
          }}
        >
          & get up to <strong style={{ fontSize: "1.3em", color: "#FFE566" }}>70% OFF</strong>
        </div>

        {/* CTA Button */}
        <button
          style={{
            marginTop: 32,
            padding: "14px 40px",
            borderRadius: 50,
            border: "none",
            background: "#fff",
            color: "#c0392b",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.05em",
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(255,255,255,0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,255,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,255,255,0.3)";
          }}
        >
          {isCouple ? (
            <>
              Shop for Your Partner <Gift size={18} />
            </>
          ) : (
            <>
              Treat Yourself <StarIcon size={18} fill="currentColor" />
            </>
          )}
        </button>
      </div>

      {/* Bottom wave */}
      <svg
        style={{ position: "absolute", bottom: -2, left: 0, right: 0, width: "100%" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill="#faf8f5"
          style={{ transition: "fill 0.8s ease" }}
        />
      </svg>
    </div>
  );
};

export default HeroBanner;
