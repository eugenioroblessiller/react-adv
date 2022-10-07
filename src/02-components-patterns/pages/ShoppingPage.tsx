import '../styles/custom-styles.css';

import React, { useState } from 'react';

import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { products } from '../data/products';
import { Product } from '../interfaces/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart()
  
  return (
    <div>
      <h1>Shopping page</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Cafe" />
          <ProductCard.Buttons
            counter={0}
            handleIncreaseBy={function (value: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} value={shoppingCart[product.id]?.count || 0} onChange={onProductCountChange}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard key={key} product={product} value={product.count} onChange={onProductCountChange} style={{ width: "100px" }}>
            <ProductImage />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
