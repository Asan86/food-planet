import React from "react";
import styles from "../advantages/Advantages.module.css";
import reviwImg1 from "../../assets/img/advantages_img/group25.svg";
import reviwImg2 from "../../assets/img/advantages_img/group26.svg";
import reviwImg3 from "../../assets/img/advantages_img/group27.svg";
import reviwImg4 from "../../assets/img/advantages_img/group28.svg";

function Advantages() {
  return (
    <section>
      <div className="advantages">
        <div className="advantages_outher">
          <h3 className={styles.advantages_title}>Почему выбирают нас:</h3>
        </div>
        <div className={styles.advantages_content}>
          <div className={styles.advantages_item}>
            <img className={styles.advantages_img} src={reviwImg1} alt="" />
            <h3 className={styles.advantages_inner_title}>
              Мгновенная доставка
            </h3>
            <p className={styles.advantages_text}>
              Доставим заказанную вами еду за 30 минут + напиток в подарок
            </p>
          </div>
          <div className={styles.advantages_item}>
            <img
              className={styles.advantages_img}
              src={reviwImg2}
              alt=""
            />
            <h3 className={styles.advantages_inner_title}>Свежие продукты</h3>
            <p className={styles.advantages_text}>
              Вся продукция хранится в хороших условиях тем самым продливая срок
              хранения
            </p>
          </div>
          <div className={styles.advantages_item}>
            <img
              className={styles.advantages_img}
              src={reviwImg3}
              alt=""
            />
            <h3 className={styles.advantages_inner_title}>Уникальное меню</h3>
            <p className={styles.advantages_text}>
              Ежедневно мы обновляем наше меню и том числе коктейльное
            </p>
          </div>
          <div className={styles.advantages_item}>
            <img
              className={styles.advantages_img}
              src={reviwImg4}
              alt=""
            />
            <h3 className={styles.advantages_inner_title}>Доставка</h3>
            <p className={styles.advantages_text}>
              Мы быстро доставляем вашу еду по указанному адресу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
