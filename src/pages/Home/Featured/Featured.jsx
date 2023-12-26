import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-10">
      <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="uppercase">Jan 25, 2023 WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
            deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
