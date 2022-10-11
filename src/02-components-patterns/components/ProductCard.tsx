import React, { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, handleIncreaseBy } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ counter, handleIncreaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} handleIncreaseBy={handleIncreaseBy} /> */}
      </div>
    </Provider>
  );
};
