import Image from "next/image";

const CategoriesDescrptions = ({ img, categoryName, categoryDescription, link, linkText }) => {
  return (
    <div className="categories-card-description">
      <Image src={img} alt={categoryName} title={categoryName} width={100} height={100} />
      <h2>{categoryName}</h2>
      <p>{categoryDescription}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};

export default CategoriesDescrptions;
