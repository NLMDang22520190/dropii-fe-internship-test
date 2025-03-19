import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, onWishlistToggle }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWishlistToggle={onWishlistToggle}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
