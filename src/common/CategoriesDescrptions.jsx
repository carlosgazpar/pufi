const CategoriesDescrptions = ({ img, categoryName, categoryDescription, link, linkText }) => {
  return (
    <div className="categories-card-description">
      <img src={img} alt={categoryName} title={categoryName} />
      <h2>{categoryName}</h2>
      <p>{categoryDescription}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};

export default CategoriesDescrptions;
