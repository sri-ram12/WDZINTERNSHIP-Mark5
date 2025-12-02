import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="hero-header">
      <div className="hero-header-inner">
        <div className="hero-header-main">
          <h1 className="hero-product-title">IPhone 17 Pro Max</h1>
        </div>

        <div className="hero-header-meta">
          <div className="hero-price">
            <span className="meta-label">From</span>
            <span className="meta-value">$1,199</span>
          </div>
          <button className="hero-cta"><a href="https://www.apple.com/in/shop/buy-iphone">Buy Now</a></button>
        </div>
      </div>
    </header>
  );
}
