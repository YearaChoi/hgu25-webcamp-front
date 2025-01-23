import React from "react";
import Header from "../components/Header";
import MainCarousel from "../components/MainPage/MainCarousel";
import CategoryCarousel from "../components/MainPage/CategoryCarousel";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div>
      <Header />
      <MainCarousel />
      <CategoryCarousel />
      <Footer />
    </div>
  );
}

export default MainPage;
