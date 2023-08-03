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
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
          <InstagramFeedItem
            alt="Instagram1"
            img="/assets/img/pufi-1.jpg"
            url="https://www.instagram.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
