import "../styles/custom-styles.css";

import React, { useState } from "react";

import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { Product } from "../interfaces/interfaces";

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

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart(oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return { ...oldShoppingCart, [product.id]: productInCart }
      }

      // Borrado de producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart
      return rest
      
      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart
      //   return rest
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count }
      // }
    })

  };
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
