import React, { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCartHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCartHandlers) => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, isMaxCountReach, maxCount, handleIncreaseBy, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ counter, maxCount, handleIncreaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReach: isMaxCountReach,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy: handleIncreaseBy,
          reset
        })}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} handleIncreaseBy={handleIncreaseBy} /> */}
      </div>
    </Provider>
  );
};
