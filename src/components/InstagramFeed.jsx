import Breadcrumb from "@/common/Breadcrumb";
import Heading from "@/common/Heading";

import "@/styles/components/InstagramFeed.scss";
import InstagramFeedItem from "@/common/InstagramFeedItem";

const InstagramFeed = () => {
  return (
    <div className="instagram-feed">
      <Breadcrumb text="Instagram" />

      <Heading text="#ESPUFI" />

      <div className="container">
        <div className="instagram-feed-grid ">
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/instagram-pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram2"
            img="/assets/img/instagram-pufi-2.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram3"
            img="/assets/img/instagram-pufi-3.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram4"
            img="/assets/img/instagram-pufi-4.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram5"
            img="/assets/img/instagram-pufi-5.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram6"
            img="/assets/img/instagram-pufi-6.jpg"
            url="https://www.instagram.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
