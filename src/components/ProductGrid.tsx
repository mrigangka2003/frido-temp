import React from "react";
import type { Product, Mode } from "../api/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  mode: Mode;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, mode }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 24,
        marginTop: 24,
      }}
    >
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} mode={mode} delay={i * 80} />
      ))}
    </div>
  );
};

export default ProductGrid;
