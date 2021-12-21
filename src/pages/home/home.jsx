import bot from "../../bot.jpg";
import review from "../../review-img.jpg";
import ProductsTestedInLabs from "./products-tested-labs";
function Home() {
  return (
    <div>
      <div className="h-screen ">
        <div className="">
          <div className="bg-white mt-8 grid md:grid-cols-2 ">
            <div className="flex flex-col justify-center items-center py-28">
              <h1 className=" text-gray-800 text-left">
                <div className="text-4xl">The best</div>
                <div className="text-9xl"> Tech </div>
                <div className="text-4xl">Buying Advice</div>
              </h1>
              <div>
                <p className=" text-gray-800 md:ml-32 px-9 pt-3">
                  You can trust our in-depth technology reviews to help you buy
                  the best. Read our reviews guarantee to find out why.
                </p>
              </div>
              <button className="mt-5 w-64 mr-20">Check here!</button>
            </div>
            <div>
              <img
                src={bot}
                alt="no logo"
                width="500px"
                className="rounded-2xl"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-200 bg-opacity-50 mt-10">
          <ProductsTestedInLabs />
        </div>
        <div className="py-4">
          <div className="bg-gray-100 mx-0 py-5 px-40 grid grid-cols-2">
            <div>
              <h1>What's Safest? The Best Deal?</h1>
              <h1>Most reliable</h1>
              <p className="mt-3">
                Get the answers you need for your home, your ride, and your
                tech—and help us fight for fairness and safety for every
                consumer
              </p>
              <p>
                Get our expert, independent ratings and reviews, trusted
                reporting, plus tools to help keep you informed, safe and
                connected.
              </p>
              <div>
                <button className="bg-transparent hover:bg-purple-100 border-4 border-blue-600 text-blue-600 mt-4">
                  Join Comunity
                </button>
              </div>
            </div>
            <div>
              <img
                src={review}
                alt="no logo"
                width="500px"
                className="rounded-2xl shadow-md mt-3"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1>RevBot</h1>
          <p>All rights reserved</p>
          <p>Copyright @ 2021 RevBot,Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
