import '../styles/custom-styles.css';

import React, { useState } from 'react';

import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping page</h1>
      <hr />

      <ProductCard key={product.id} product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}>
        {({ count, maxCount, isMaxCountReach, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>

        )}
      </ProductCard>
    </div>

  );
};
