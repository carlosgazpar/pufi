"use client";

import Button from "@/common/Button";
import "@/styles/components/MainSlider.scss";
import ReactElasticCarousel from "react-elastic-carousel";
const MainSlider = () => {
  return (
    <div className="main-slider">
      <ReactElasticCarousel showArrows={false} enableAutoPlay={true} autoPlaySpeed={3000}>
        <div
          className="main-slider-item"
          style={{ backgroundImage: "url(/assets/img/main-slider1.jpg)" }}
        >
          <h1>
            Estár cómodo,
            <br />
            nunca fue tan fácil
          </h1>
          <Button link="" text="Shop" />
        </div>
        <div
          className="main-slider-item"
          style={{ backgroundImage: "url(/assets/img/main-slider2.jpg)" }}
        >
          <h1>
            Estár cómodo,
            <br />
            nunca fue tan fácil
          </h1>
          <Button link="" text="Shop" />
        </div>
        <div
          className="main-slider-item"
          style={{ backgroundImage: "url(/assets/img/main-slider3.jpg)" }}
        >
          <h1>
            Estár cómodo,
            <br />
            nunca fue tan fácil
          </h1>
          <Button link="" text="Shop" />
        </div>
      </ReactElasticCarousel>
    </div>
  );
};

export default MainSlider;
