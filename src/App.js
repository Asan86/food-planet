import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import Menu from "./components/menu/Menu";
import Advantages from "./components/advantages/Advantages";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
   

  return (
    <>
      <div className="wrapper">
        <Header />
        <Main />
        <Products />
        <Menu />
        <Advantages />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default App;
