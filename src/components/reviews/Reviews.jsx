import React from "react";
import styles from "../reviews/Reviews.module.css";
import reviewsImg1 from "../../assets/img/reviews_img/edit1.svg"
import reviewsImg2 from "../../assets/img/reviews_img/ellipse1.svg"

function Reviews() {
  return (
    <section>
      <div className="reviews">
        <div className={styles.reviews_title_outher}>
          <h3 className="reviews_title">Отзывы</h3>
        </div>
        <div className={styles.reviews_card_outher}>

          <div className={styles.reviews_card}>
            <img
              className={styles.reviews_card_ellipse}
              src={reviewsImg2}
              alt="img"
            />
            <div>
              <span>Сергей</span>
              <img src={reviewsImg1} alt="img" />
            </div>
            <p className={styles.reviews_card_text}>
              Большое спасибо! 5 пицц доставили даже быстрее чем планировалось.
              Пицца была горячая и всему коллективу понравилась! День Рождения
              прошел отлично!
            </p>
            <span>02.07.2020</span>
          </div>
          <div className={styles.reviews_card}>
            <img
              className={styles.reviews_card_ellipse}
              src={reviewsImg2}
              alt="img"
            />
            <div>
              <span>Сергей</span>
              <img src={reviewsImg1} alt="img" />
            </div>
            <p className={styles.reviews_card_text}>
              Большое спасибо! 5 пицц доставили даже быстрее чем планировалось.
              Пицца была горячая и всему коллективу понравилась! День Рождения
              прошел отлично!
            </p>
            <span>02.07.2020</span>
          </div>
          <div className={styles.reviews_card}>
            <img
              className={styles.reviews_card_ellipse}
              src={reviewsImg2}
              alt="img"
            />
            <div>
              <span>Сергей</span>
              <img src={reviewsImg1} alt="img" />
            </div>
            <p className={styles.reviews_card_text}>
              Большое спасибо! 5 пицц доставили даже быстрее чем планировалось.
              Пицца была горячая и всему коллективу понравилась! День Рождения
              прошел отлично!
            </p>
            <span>02.07.2020</span>
          </div>
          <div className={styles.reviews_card}>
            <img
              className={styles.reviews_card_ellipse}
              src={reviewsImg2}
              alt="img"
            />
            <div>
              <span>Сергей</span>
              <img src={reviewsImg1} alt="img" />
            </div>
            <p className={styles.reviews_card_text}>
              Большое спасибо! 5 пицц доставили даже быстрее чем планировалось.
              Пицца была горячая и всему коллективу понравилась! День Рождения
              прошел отлично!
            </p>
            <span>02.07.2020</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;
