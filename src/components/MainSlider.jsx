"use client";

import Button from "@/common/Button";
import MainSliderItem from "@/common/MainSliderItem";
import "@/styles/components/MainSlider.scss";
import ReactElasticCarousel from "react-elastic-carousel";
const MainSlider = () => {
  return (
    <div className="main-slider">
      <ReactElasticCarousel showArrows={false} enableAutoPlay={true} autoPlaySpeed={10000}>
        <MainSliderItem img='/assets/img/main-slider3.jpeg' link='' linkText='Shop' />
        <MainSliderItem img='/assets/img/main-slider2.jpg' link='' linkText='Shop' />
        <MainSliderItem img='/assets/img/main-slider1.jpg' link='' linkText='Shop' />
      </ReactElasticCarousel>
    </div>
  );
};

export default MainSlider;
