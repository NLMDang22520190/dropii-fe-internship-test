"use client";

import React, { useState, useEffect } from "react";
import { message } from "antd";
import ProductsGrid from "@/components/Products/ProductsGrid";
import ProductsFilters from "@/components/Products/ProductsFilters";
import LoadMore from "@/components/Products/LoadMore";
import { mockProducts } from "@/data/mockProducts";

const PRODUCTS_PER_PAGE = 12;

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    setProducts(mockProducts);
    setDisplayedProducts(mockProducts.slice(0, PRODUCTS_PER_PAGE));
  }, []);

  useEffect(() => {
    if (!products.length) return;
    let sortedProducts = [...products];
    if (sortBy === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setDisplayedProducts(
      sortedProducts.slice(0, currentPage * PRODUCTS_PER_PAGE)
    );
  }, [sortBy, products, currentPage]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const end = nextPage * PRODUCTS_PER_PAGE;
      let sortedProducts = [...products];
      if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setDisplayedProducts(sortedProducts.slice(0, end));
      setCurrentPage(nextPage);
      setLoading(false);
    }, 800);
  };

  const handleWishlistToggle = (id, isWishlisted) => {
    message.info(
      isWishlisted
        ? "Product added to wishlist"
        : "Product removed from wishlist"
    );
  };

  const hasMore = displayedProducts.length < products.length;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Our Products
            </h1>
            <p className="text-muted-foreground">
              Discover our collection of beautifully crafted products
            </p>
          </div>
          <ProductsFilters
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalProducts={products.length}
          />
          <ProductsGrid
            products={displayedProducts}
            onWishlistToggle={handleWishlistToggle}
          />
          <LoadMore
            loading={loading}
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;
