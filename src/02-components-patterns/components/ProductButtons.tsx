import { useCallback, useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";


interface ProductButtonProps {
  className?: string
}

export const ProductButtons = ({ className }: ProductButtonProps) => {
  const { counter, maxCount, handleIncreaseBy } = useContext(ProductContext);

  const isMaxReach = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )


  return (
    <div className={`${styles.buttonsContainer} ${className}}`}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel}`}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`} onClick={() => handleIncreaseBy(1)}>
        +
      </button>
    </div>
  );
};
