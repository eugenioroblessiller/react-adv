import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import React, { createContext, ReactElement, useContext, useState } from 'react';

import { useProduct } from '../hooks/useProduct';
import {  ProductContextProps, Props } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { counter, handleIncreaseBy } = useProduct();

  return (
    <Provider value={{ counter, handleIncreaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} handleIncreaseBy={handleIncreaseBy} /> */}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
