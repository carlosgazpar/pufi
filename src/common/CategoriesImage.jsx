import Button from "./Button";

const CategoriesImage = ({img, link, text, isReverse = false}) => {
  return (
    <div
      className={`categories-card-image ${isReverse && 'categories-card-image-reverse'}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="categories-card-overlay">
        <Button link={link} text={text} />
      </div>
    </div>
  );
};

export default CategoriesImage;
