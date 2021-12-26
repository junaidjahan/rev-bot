function ReviewCard({ imageURl, name, price, description, buttonClick }) {
  const buttonClicked = (e) => {
    buttonClick();
  };
  return (
    <div>
      {imageURl && (
        <div className="bg-white  grid grid-cols-3 rounded-xl shadow-md mt-9">
          <div className="rounded-xl -mt-9 p-4 w-64 h-60">
            <img
              src={imageURl}
              alt=""
              className="rounded-xl shadow-md h-full w-full"
            />
          </div>
          <div className="col-span-2 p-3">
            <h1 className="text-gray-700 ">{name}</h1>

            <h2 className="text-xl font-bold text-blue-600 ">{price}</h2>
            <p className="my-1">{description}</p>
            <button
              onClick={(e) => {
                buttonClicked(e);
              }}
              className="rounded-lg py-1.5 px-2 bg-blue-500  hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
