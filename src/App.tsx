import React, { useState, useEffect } from "react";
import type { Mode, Product } from "./api/products";
import { fetchProducts, coupleCategories, singleCategories } from "./api/products";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import MidBanner from "./components/MidBanner";

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>("couple");
  const [products, setProducts] = useState<Product[]>([]);
  const [contentVisible, setContentVisible] = useState(true);
  const isCouple = mode === "couple";

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleToggleMode = () => {
    setContentVisible(false);
    setTimeout(() => {
      setMode((prev) => (prev === "couple" ? "single" : "couple"));
      setContentVisible(true);
    }, 300);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf8f5",
        transition: "background 0.8s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #dcd0c0; border-radius: 3px; }
      `}</style>

      <Navbar mode={mode} />
      <HeroBanner mode={mode} onToggleMode={handleToggleMode} />

      {/* Main content */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "48px 40px",
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Section 1: Category + products */}
        <section>
          <CategoryTabs
            categories={isCouple ? coupleCategories : singleCategories}
            mode={mode}
            title={isCouple ? "So... what kind of Paglu is yours?" : "Pick Where You Need Pampering"}
          />
          <ProductGrid products={products} mode={mode} />
        </section>

        {/* Mid Banner */}
        <MidBanner mode={mode} />

        {/* Section 2: Bottom product grid */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: isCouple ? "italic" : "normal",
              fontSize: "clamp(20px, 2vw, 28px)",
              color: "#2c3e50",
              textAlign: "center",
              marginBottom: 32,
              transition: "color 0.6s ease",
            }}
          >
            {isCouple ? "Perfect Pairs for Perfect Comfort" : "Your Self-Care Essentials"}
          </h2>
          <ProductGrid products={[...products].reverse()} mode={mode} />
        </section>

        {/* Footer spacer */}
        <div style={{ height: 64 }} />

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            borderTop: "1px solid #eaeaea",
            paddingTop: 32,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "#888",
            letterSpacing: "0.04em",
            transition: "color 0.6s ease, border-color 0.6s ease",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#c0392b",
              marginBottom: 8,
            }}
          >
            frido
          </div>
          © 2025 Frido. Comfort for Everyone. &nbsp;•&nbsp; myfrido.com
        </footer>
      </div>
    </div>
  );
};

export default App;
