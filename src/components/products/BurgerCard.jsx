import React from "react";
import styles from "../products/Products.module.css";

function BurgerCard({ img, title, desc, price }) {
  return (
    <div className={styles.new_products_card}>
      <img className={styles.new_products_card_img} src={img} alt="burger" />
      <h3 className={styles.new_products_subTitle}>{title}</h3>
      <p className={styles.new_products_card_text}>{desc}</p>
      <span className={styles.new_products_card_price}>{price}</span>
      <p className={styles.new_products_count}>
        <button className={styles.btn_subtract}>-</button>
        <span className={styles.quantity}>1</span>{" "}
        <button className={styles.btn_add}>+</button>
      </p>
      <input
        className={styles.new_products_input}
        type="submit"
        value="В корзину"
      />
    </div>
  );
}

export default BurgerCard;
