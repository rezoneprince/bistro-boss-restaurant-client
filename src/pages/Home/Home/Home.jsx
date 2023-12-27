import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefCard from "../ChefCard/ChefCard";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefCard></ChefCard>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
