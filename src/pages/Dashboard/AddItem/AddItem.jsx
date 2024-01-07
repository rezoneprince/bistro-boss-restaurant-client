import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <div className="w-full px-10">
      <SectionTitle subHeading="What's New" heading="Add an item"></SectionTitle>

      <form>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Detail</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </label>
        <input className="btn btn-sm" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
