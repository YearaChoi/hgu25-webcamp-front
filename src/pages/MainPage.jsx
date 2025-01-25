import React from "react";
import Header from "../components/Header";
import MainCarousel from "../components/MainPage/MainCarousel";
import CategoryCarousel from "../components/MainPage/CategoryCarousel";
import Footer from "../components/Footer";
import HeaderDetail from "../components/HeaderDetail";

function MainPage() {
  return (
    <div>
      <Header />
      <HeaderDetail />
      <MainCarousel />
      <CategoryCarousel />
      <Footer />
    </div>
  );
}

export default MainPage;
