import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const ProductsFilters = ({ sortBy, onSortChange, totalProducts }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div className="text-sm text-muted-foreground">
        {totalProducts} products found
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Sort by:</span>

        <button
          className={`sort-btn ${sortBy === "price-asc" ? "active" : ""}`}
          onClick={() =>
            onSortChange(sortBy === "price-asc" ? null : "price-asc")
          }
          aria-label="Sort by price: low to high"
        >
          Price <ArrowUp className="w-4 h-4" />
        </button>

        <button
          className={`sort-btn ${sortBy === "price-desc" ? "active" : ""}`}
          onClick={() =>
            onSortChange(sortBy === "price-desc" ? null : "price-desc")
          }
          aria-label="Sort by price: high to low"
        >
          Price <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductsFilters;
