import React from 'react'
import styles from "../menu/Menu.module.css";

function MenuCard({img, title, desc, price}) {
  return (
    <div className={styles.menu_card}>
            <img
              className={styles.menu_card_img}
              src={img}
              alt="burger"
            />
            <h3 className={styles.menu_subTitle}>{title}</h3>
            <p className={styles.menu_text}>
             {desc}
            </p>
            <span className={styles.menu_price}>{price}</span>
            <p className={styles.menu_count}>
            <button className={styles.btn_subtract}>-</button>
            <span className={styles.quantity}>1</span> 
            <button className={styles.btn_add}>+</button>
            </p>
            <input
              className={styles.menu_input}
              type="submit"
              value="В корзину"
            />
          </div>
  )
}

export default MenuCard