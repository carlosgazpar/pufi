import "@/styles/components/CategoriesCards.scss";
import CategoriesImage from "@/common/CategoriesImage";
import CategoriesDescrptions from "@/common/CategoriesDescrptions";

const CategoriesCards = () => {
  return (
    <div className="categories-cards">

      <div className="categories-cards-row">
        <CategoriesImage img='/assets/img/pufi-1.jpg' link="" text="Shop" />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi RAIN"
          img='/assets/img/pufi-2.jpg'
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row categories-cards-row-inverse">
        <CategoriesImage img='/assets/img/pufi-4.jpg' link="" text="Shop" isReverse />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi PUFF"
          img='/assets/img/pufi-3.webp'
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row">
        <CategoriesImage img='/assets/img/pufi-5.jpg' link="" text="Shop" />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi CART"
          img='/assets/img/pufi-6.webp'
          link=''
          linkText='&gt;Ver Más'
        />
      </div>
      <div className="categories-cards-row categories-cards-row-inverse">
        <CategoriesImage img='/assets/img/pufi-8.jpg' link="" text="Shop" isReverse />
        <CategoriesDescrptions
          categoryDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          categoryName="Pufi NAP"
          img='/assets/img/pufi-7.webp'
          link=''
          linkText='&gt;Ver Más'
        />
      </div>

    </div>
  );
};

export default CategoriesCards;