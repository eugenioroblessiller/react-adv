import '../styles/custom-styles.css';

import React from 'react';

import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { Product } from '../interfaces/interfaces';

const product1 = {
  id: "1",
  title: "Coffe One",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffe Two",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
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
          <ProductCard key={product.id} product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard product={product2} style={{ width: "100px" }}>
          <ProductImage />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product1} style={{ width: "100px" }}>
          <ProductImage />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
