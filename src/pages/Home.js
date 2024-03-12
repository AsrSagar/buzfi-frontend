import Navbar from '../components/header/Navbar';
import FooterArea from '../components/footer/footerArea';
import HomeSlider from "../components/homecomponents/homeslider";
import FeaturedBanner from "../components/featuredBanner/featuredBanner";
import FlashDeal from "../components/flashdeal/flashDeal";
import TopCategories from "../components/topcategories/topCategories";

const Home = () => {
    return(
        <>
          <Navbar />
            <HomeSlider />
            <FeaturedBanner />
            <FlashDeal />
            <TopCategories />
          <FooterArea />
        </>
    )
};
export default Home;
  