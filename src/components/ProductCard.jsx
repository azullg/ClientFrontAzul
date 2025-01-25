import styles from "./ProductCard.module.css";
import React from "react";

export default function ProductCard({ product, addToBag }) {
  return (
    <div className={styles.containerGeneral}>
      <div
        className={styles.containerimg}
        style={{
          backgroundImage: `url(${product.img})`,
        }}
      >
        <button onClick={() => addToBag(product)}>+</button>
      </div>
      <div className={styles.containerinfo}>
        <h3>{product.name}</h3>
        <p> $ {product.price}</p>
      </div>
      <div className={styles.containerinfo2}>
        <p>Mueble de sala</p>
      </div>
    </div>
  );
}
