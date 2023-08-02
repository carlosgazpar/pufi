import "../styles/components/CategoriesCards.scss";
import backgroundImg1 from "../assets/img/pufi-1.jpg";
import backgroundImg2 from "../assets/img/pufi-4.jpg";
import backgroundImg3 from "../assets/img/pufi-5.jpg";
import backgroundImg4 from "../assets/img/pufi-8.jpg";
import productImg1 from "../assets/img/pufi-2.jpg";
import productImg3 from "../assets/img/pufi-6.webp";
import productImg2 from "../assets/img/pufi-3.webp";
import productImg4 from "../assets/img/pufi-7.webp";
import CategoriesImage from "../common/CategoriesImage";
import CategoriesDescrptions from "../common/CategoriesDescrptions";

const CategoriesCards = () => {
  return (
    <div className="categories-cards">

      <div className="categories-cards-row">
        <CategoriesImage img={backgroundImg1} link="" text="Shop" />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi RAIN"
          img={productImg1}
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row categories-cards-row-inverse">
        <CategoriesImage img={backgroundImg2} link="" text="Shop" isReverse />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi RAIN"
          img={productImg2}
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row">
        <CategoriesImage img={backgroundImg3} link="" text="Shop" />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi RAIN"
          img={productImg3}
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row categories-cards-row-inverse">
        <CategoriesImage img={backgroundImg4} link="" text="Shop" isReverse />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi RAIN"
          img={productImg4}
          link=''
          linkText='&gt;Ver Más'
        />
      </div>

    </div>
  );
};

export default CategoriesCards;
