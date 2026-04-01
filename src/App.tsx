import React, { useState, useEffect } from "react";
import type { Mode, Product } from "./api/products";
import { coupleCategories, singleCategories } from "./api/products";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryTabs from "./components/CategoryTabs";
import ProductGrid from "./components/ProductGrid";
import MidBanner from "./components/MidBanner";
import { fetchShopifyProducts } from "./api/shopify";

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>("couple");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);
  const isCouple = mode === "couple";

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      const data = await fetchShopifyProducts(mode);
      if (!cancelled) {
        setProducts(data);
        setLoading(false);
      }
    };
    void load();
    return () => { cancelled = true; };
  }, [mode]);

  const handleToggleMode = () => {
    setContentVisible(false);
    setTimeout(() => {
      setMode((prev) => (prev === "couple" ? "single" : "couple"));
      setContentVisible(true);
    }, 300);
  };

  const displayProducts = loading ? [] : products;

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
          {loading ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#aaa", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
              Loading products…
            </div>
          ) : (
            <ProductGrid products={displayProducts} mode={mode} />
          )}
        </section>

        {/* Mid Banner */}
        <MidBanner mode={mode} />

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
