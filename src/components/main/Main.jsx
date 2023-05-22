import React from "react";
import styles from "../main/Main.module.css";
import svgBurger from "../../assets/img/main_img/burger.png";

function Main() {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.main_inner}>
          <h1 className={styles.main_title}>
            Доставка вкусной еды до 30 минут + напиток в подарок!
          </h1>
          <h3 className={styles.main_sub_title}>
            Доставим заказ вовремя и можете рассчитывать, что еда будет
            доставлен всегда горячим и ароматным.
          </h3>
          <input
            className={styles.main_input}
            type="submit"
            defaultValue="Перейти в меню"
          />
        </div>
        <div className="main_burger">
          <img className={styles.burger_img} src={svgBurger} alt="img" />
        </div>
      </div>
    </section>
  );
}

export default Main;
