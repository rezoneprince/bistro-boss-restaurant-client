const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center md:w-3/12">
      <p className="text-yellow-600 mb-2">{subHeading}</p>
      <h4 className="text-2xl uppercase border-y-4 py-2">{heading}</h4>
    </div>
  );
};

export default SectionTitle;
