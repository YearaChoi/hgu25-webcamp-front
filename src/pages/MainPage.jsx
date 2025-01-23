import React from "react";
import Header from "../components/Header";
import MainCarousel from "../components/MainPage/MainCarousel";
import CategoryCarousel from "../components/MainPage/CategoryCarousel";

function MainPage() {
  return (
    <div>
      <Header />
      <MainCarousel />
      <CategoryCarousel />
    </div>
  );
}

export default MainPage;
