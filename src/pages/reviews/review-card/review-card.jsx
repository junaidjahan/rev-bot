function ReviewCard({ imageURl, name, price, description, buttonClick }) {
  const buttonClicked = (e) => {
    buttonClick();
  };
  return (
    <div>
      {imageURl && (
        <div className="bg-white  grid md:grid-cols-3 rounded-xl shadow-md mt-9">
          <div className="rounded-xl -mt-9 p-4 md:w-64 md:h-60 h-72">
            <img
              src={imageURl}
              alt=""
              className="rounded-xl shadow-md h-full w-full"
            />
          </div>
          <div className="md:col-span-2 p-3">
            <h1 className="text-gray-700 ">{name}</h1>

            <h2 className="text-xl font-bold text-blue-600 ">{price}</h2>
            <p className="my-1">{description}</p>
            <div className="text-center md:text-left">
              <button
                onClick={(e) => {
                  buttonClicked(e);
                }}
                className="rounded-lg md:py-1.5 md:px-2 px-20 bg-blue-500  hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
