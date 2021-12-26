import React from "react";
import mobileImages from "../../images/men.png";
import bot from "../../unnamed.png";
function About() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <div className="">
        <div className="bg-indigo-500 mt-8 grid md:grid-cols-2 rounded-lg ">
          <div className="flex flex-col justify-center items-center py-28">
            <h1 className=" text-white text-left">
              <div className="text-4xl">Helping</div>
              <div className="text-9xl">Millions</div>
              <div className="text-4xl">Grow Better.</div>
            </h1>
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
      <div className="">
        <div className="">
          <div>
            <div className="bg-white  grid grid-cols-3 rounded-full shadow-md mt-9">
              <div className="rounded-full -mt-1 p-4 ">
                <img
                  src={mobileImages}
                  alt=""
                  className="rounded-full shadow-sm "
                />
              </div>
              <div className="col-span-2 p-3">
                <h1 className="text-gray-700 ">Junaid Jahan</h1>

                <h2 className="text-xl font-bold text-blue-600 ">
                  CEO Lauren Industry
                </h2>
                <p className="my-1">
                  They say that the first impression is the last. What better
                  way to let people remember you than to give them an amusing,
                  ridiculous, and striking introduction of yourself that they
                  won’t forget anytime soon? Here are a few “About Me” quotes
                  and sayings that are short, quirky, and funny. Take a peek!
                </p>
              </div>
            </div>
            <div className="bg-white  grid grid-cols-3 rounded-full shadow-md mt-9">
              <div className="rounded-xl -mt-1 p-4">
                <img
                  src={mobileImages}
                  alt=""
                  className="rounded-full shadow-sm "
                />
              </div>
              <div className="col-span-2 p-3">
                <h1 className="text-gray-700 ">Ali Abbas</h1>

                <h2 className="text-xl font-bold text-blue-600 ">
                  Sorry I'm not interesting.
                </h2>
                <p className="my-1">
                  They say that the first impression is the last. What better
                  way to let people remember you than to give them an amusing,
                  ridiculous, and striking introduction of yourself that they
                  won’t forget anytime soon? Here are a few “About Me” quotes
                  and sayings that are short, quirky, and funny. Take a peek!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex place-content-center">
          <div>
            <h1 className="get-in">Get In Touch</h1>
          </div>
        </div>
        <div className="flex place-content-center">
          <button
            className="button"
            href="https://www.linkedin.com/in/ali-abbas-5b1288214/"
          >
            LinkedIn
          </button>
          <button className="button" href="https://twitter.com/alii_abbax">
            Twitter
          </button>
          <button className="button" href="https://www.intagram.com/">
            Instagram
          </button>
        </div>
      </div>
      <div className="flex place-content-center">
        <p class="copyright">© {currentYear} stega mega.</p>
      </div>
    </div>
  );
}
export default About;
