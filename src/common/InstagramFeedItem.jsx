import Image from "next/image";

const InstagramFeedItem = ({ url, img, alt }) => {
  return (
    <a href={url} target="_blank">
      <Image
        src={img}
        alt={alt}
        title={alt}
        width={200}
        height={200}
      />
    </a>
  );
};

export default InstagramFeedItem;
