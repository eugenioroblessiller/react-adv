import React, { useState } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, handleIncreaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffe mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="Coffe mug" /> */}
      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleIncreaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button
          className={styles.buttonAdd}
          onClick={() => handleIncreaseBy(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
