import { useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";


interface ProductButtonProps {
  className?: string
}

export const ProductButtons = ({ className }: ProductButtonProps) => {
  const { counter, handleIncreaseBy } = useContext(ProductContext);
  
  return (
    <div className={`${styles.buttonsContainer} ${className}}`}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => handleIncreaseBy(1)}>
        +
      </button>
    </div>
  );
};
