/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import svg from "../../assets/img/header_img/header_img_1.svg";
import svg2 from "../../assets/img/header_img/phone1.svg";
import svg3 from "../../assets/img/header_img/buy_1.svg";
import styles from "../header/Header.module.css";

function Header() {
  return (
    <section>
      <div className="header">
        <nav className={styles.nav}>
          <div className={styles.logo_outher}>
            <div className="logo_img">
              <img src={svg} alt="IMG" />
            </div>
            <div className={styles.logo}>
              <a href="#">food planet</a>
              <span>Планета вкусной еды</span>
            </div>
          </div>
          <ul className={styles.nav_ul}>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="#">
                Главная
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="#">
                Меню
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="#">
                Доставка
              </a>
            </li>
            <li className="nav_ul_li">
              <a className={styles.ul_li_a} href="#">
                Контакты
              </a>
            </li>
          </ul>
          <div className="icon">
            <img src={svg2} alt="img" />
            <span className={styles.phoneNumber}>+996500405988</span>
            <img src={svg3} alt="img" />
            <span className={styles.number}>1</span>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
