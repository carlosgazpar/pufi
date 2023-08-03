import Button from "./Button";

const MainSliderItem = ({ img, text, link, linkText }) => {
  return (
    <div
      className="main-slider-item"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1>
        Estár cómodo,
        <br />
        nunca fue tan fácil
      </h1>
      <Button link={link} text={linkText} />
    </div>
  );
};

export default MainSliderItem;
