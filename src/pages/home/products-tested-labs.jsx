import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductsTestedInLabs() {
  return (
    <div className=" p-8">
      <h1 className=" text-gray-700 ">Products Tested in Our Labs</h1>
      <div className=" pt-6 px-52">
        <div className="grid grid-cols-3  ">
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200  shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon
                className="blue-icon  "
                icon="mobile-alt"
                size="3x"
              />
            </div>
            <div className="font-semibold mt-2 text-xl">Mobile Testing</div>
          </div>
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200  shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon className="blue-icon " icon="laptop" size="3x" />
            </div>
            <div className="font-semibold mt-2 text-xl">Laptop Testing</div>
          </div>
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200 shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon
                className="blue-icon  "
                icon="headphones-alt"
                size="3x"
              />
            </div>
            <div className="font-semibold mt-2 text-xl">Headset Testing</div>
          </div>
        </div>
      </div>
      <div className="py-6 px-52">
        <div className="grid grid-cols-3 gap-x-0">
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200  shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon
                className="blue-icon  "
                icon="keyboard"
                size="3x"
              />
            </div>
            <div className="font-semibold mt-2 text-xl">
              Accessories Testing
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200  shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon
                className="blue-icon"
                icon="digital-tachograph"
                size="3x"
              />
            </div>
            <div className="font-semibold mt-2 text-xl">GPU Testing</div>
          </div>
          <div className="flex flex-col justify-center items-center px-6">
            <div className=" bg-blue-200 shadow-md h-24 w-24  flex justify-center items-center  rounded-full">
              <FontAwesomeIcon
                className="blue-icon  "
                icon="camera-retro"
                size="3x"
              />
            </div>
            <div className="font-semibold mt-2 text-xl">Camera Testing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsTestedInLabs;
