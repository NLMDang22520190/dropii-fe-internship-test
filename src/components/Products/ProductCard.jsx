"use client";

import React, { useState } from "react";
import { Heart, Truck, Gift, Zap } from "lucide-react";

const formatPrice = (price) => `₫${price.toLocaleString("vi-VN")}`;
const formatSoldCount = (count) =>
  count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();

const ProductCard = ({ product, onWishlistToggle }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = () => {
    const newState = !isWishlisted;
    setIsWishlisted(newState);
    if (onWishlistToggle) {
      onWishlistToggle(product.id, newState);
    }
  };

  return (
    <div className="product-card group animate-scale-in">
      <div
        className={`relative w-full aspect-square overflow-hidden ${
          !imageLoaded ? "img-loading" : ""
        }`}
      >
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-700  ${
            !imageLoaded ? "blur-sm scale-105" : "blur-0 scale-100"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {product.discount && (
          <div className="badge-discount absolute top-0 left-0 z-10">
            -{product.discount}%
          </div>
        )}
        <div className="absolute bottom-2 left-2 z-10 flex flex-row gap-1">
          {product.freeShipping && (
            <div className="badge-free">
              <Truck className="w-3 h-3" />
              FREE
            </div>
          )}
          {product.hasGift && (
            <div className="badge-gift">
              <Gift className="w-3 h-3" />
              Quà tặng
            </div>
          )}
        </div>
        <button
          className={`wishlist-btn ${isWishlisted ? "text-red-500" : ""}`}
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isWishlisted ? "fill-current animate-heart-beat" : ""
            }`}
          />
        </button>
      </div>
      <div className="p-3 space-y-2">
        {product.flashSale?.active && (
          <div className="badge-flash">
            <span className="flash-text">FLASH</span>
            <Zap className="w-3 h-3 text-yellow-300" fill="yellow" />
            <span className="flash-text">SALE</span>
            <span className="text-[#ec5d7e]">・{product.flashSale.endsAt}</span>
          </div>
        )}
        <h3 className="product-title">{product.title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="price-text text-base">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sold text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.totalSold && (
          <div className="badge-sold">
            {formatSoldCount(product.totalSold)} Đã bán
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
