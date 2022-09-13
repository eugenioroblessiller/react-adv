import React from "react";

import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe One",
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard key={product.id} product={product} />
      </div>
    </div>
  );
};
