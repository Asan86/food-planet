/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../footer/Footer.module.css";
import footImg1 from "../../assets/img/footer_img/white.svg";
import footImg2 from "../../assets/img/footer_img/phone.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_outher}>
          <div className="foot_img">
            <img src={footImg1} alt="phone"/>
          </div>
          <div className={styles.foot}>
            <a href="#">food planet</a>
            <span>Планета вкусной еды</span>
          </div>
        </div>
        <ul className={styles.foot_ul}>
          <li className={styles.foot_ul_li}>
            <a href="#">Главная</a>
          </li>
          <li className={styles.foot_ul_li}>
            <a href="#">Меню</a>
          </li>
          <li className={styles.foot_ul_li}>
            <a href="#">Доставка</a>
          </li>
          <li className={styles.foot_ul_li}>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div className="foot_icon">
          <img className={styles.svg_img} src={footImg2} alt="white" />
          <span className="foot_phoneNumber">+996500405988</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
