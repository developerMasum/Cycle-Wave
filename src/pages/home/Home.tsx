import FeaturedCategories from "../../components/Home/Categories";
import Feedback from "../../components/Home/Feedback";
import FollowUs from "../../components/Home/FollowUs";
import Hero from "../../components/Home/Hero";
import WhereToWork from "../../components/Home/WhereToWork";
import WhyRideWithUs from "../../components/Home/WhyRideWithUs";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyRideWithUs />
      <WhereToWork />
      <Feedback />
      <FollowUs />
    </>
  );
};

export default Home;
