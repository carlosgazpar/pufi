import Image from "next/image";

const MenuDrawerItem = ({ id, img, title, setIsVisible }) => {
  return (
    <a href={`#${id}`}>
      {img && (
        <Image src={img} alt={title} title={title} width={50} height={50} />
      )}
      <p>{title}</p>
    </a>
  );
};

export default MenuDrawerItem;
