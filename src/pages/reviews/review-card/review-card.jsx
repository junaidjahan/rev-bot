import mobileImages from "../../../images/pixel-6.jpg";

function ReviewCard() {
  return (
    <div>
      <div className="bg-white  grid grid-cols-3 rounded-xl shadow-md mt-9">
        <div className="rounded-xl -mt-9 p-4 ">
          <img src={mobileImages} alt="" className="rounded-xl shadow-sm " />
        </div>
        <div className="col-span-2 p-3">
          <h1 className="text-gray-700 ">Google Pixel 6</h1>

          <h2 className="text-xl font-bold text-blue-600 ">$599</h2>
          <p className="my-1">
            The all-new Pixel Camera has bigger sensors to help you capture more
            color, more detail, and 150% more light than Pixel 5. And with the
            ultrawide lens on the back, get even more of your world in the shot.
          </p>
          <button className="rounded-lg py-1.5 px-2 bg-blue-500  hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
