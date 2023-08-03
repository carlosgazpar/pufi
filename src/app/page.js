import CategoriesCards from "@/components/CategoriesCards";
import InstagramFeed from "@/components/InstagramFeed";
import MainSlider from "@/components/MainSlider";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesCards />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}
