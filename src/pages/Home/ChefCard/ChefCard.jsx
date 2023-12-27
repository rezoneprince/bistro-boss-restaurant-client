import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import chef1 from "../../../assets/home/slide1.jpg";

const ChefCard = () => {
  const chefRecommended = (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72" src={chef1} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <p className="text-2xl font-bold">Caeser Salad</p>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="text-center mt-5">
            <button className="btn btn-outline border-0 border-b-4 text-black">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <section>
      <SectionTitle subHeading={"---Should Try---"} heading={"CHEF RECOMMENDS"}></SectionTitle>

      <div className="grid md:grid-cols-3">
        {chefRecommended}
        {chefRecommended}
        {chefRecommended}
      </div>
    </section>
  );
};

export default ChefCard;
