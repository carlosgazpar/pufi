import Image from "next/image";

const HeaderLinkItem = ({ img, title }) => {
  return (
    <a href="">
      <Image
        src={img}
        width={50}
        height={50}
        alt={title}
        title={title}
      />
      <p>{title}</p>
    </a>
  );
};

export default HeaderLinkItem;
