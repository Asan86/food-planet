import React, { useEffect } from "react";
import styles from "../products/Products.module.css";
import BurgerCard from "./BurgerCard";

function Products() {
  const [items, setBurgers] = React.useState([]);

  useEffect(() => {
    fetch("https://646a5f795a6ce7a8a2197b39.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setBurgers(arr);
      });
  }, []); 
  return (
    <section>
      <div className={styles.new_products}>
        <div className={styles.new_products_outher}>
          <h3 className={styles.new_products_title}>Новинки</h3>
          <div className="new_products_list-outher">
            <ul className={styles.new_products_list}>
              <li className={styles.new_products_item}>Пицца</li>
              <li className={styles.new_products_item}>Бургер</li>
              <li className={styles.new_products_item}>Суши</li>
              <li className={styles.new_products_item}>Роллы</li>
              <li className={styles.new_products_item}>Салаты</li>
              <li className={styles.new_products_item}>Десерты</li>
              <li className={styles.new_products_item}>Напитки</li>
            </ul>
          </div>
        </div>
        <div className={styles.new_products_card_outher}>
          {items.map((chBurgers) => (
            <BurgerCard
              img={chBurgers.img}
              title={chBurgers.title}
              desc={chBurgers.desc}
              price={chBurgers.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
