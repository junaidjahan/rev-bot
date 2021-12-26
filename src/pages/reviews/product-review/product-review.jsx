import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Table from "../../../components/table/table";
import { myAlert } from "../../../helpers/helpers";
import { mobile } from "../../../sdk/models/mobile/mobile.model";
import { loaderState } from "../../../state";

function ProductReview() {
  const { id } = useParams();
  const baseURl = process.env.REACT_APP_API_URL;
  const [_, setLoader] = useRecoilState(loaderState);
  const [row, setRow] = useState(mobile);

  async function getById(id) {
    setLoader(true);
    try {
      const mobile = await axios.get(`${baseURl}/mobiles/${id}`);
      setRow(mobile.data);
    } catch (e) {
      myAlert("Can't proceed ", "error");
      console.log();
    } finally {
      setLoader(false);
    }
  }
  useEffect(() => {
    getById(id);
  }, []);

  return (
    <div className="mt-5 bg-gray-100">
      <div className="container py-10">
        <h1 className="text-5xl">{row.Name}</h1>
        <h1 className="text-2xl my-2">Priced at {row.Price}</h1>
        <div className="flex justify-center">
          <img
            src={row.ImageUrl}
            width={700}
            alt=""
            className="rounded-xl shadow-sm "
          />
        </div>
        <div className="mt-7 md:grid grid-cols-2 md:px-32">
          <div className="mx-2">
            <div className="bg-green-600 h-2  "></div>
            <div className="bg-green-500 bg-opacity-30">
              <h1 className="text-center text-xl pt-2">Good Points</h1>
              <div className="px-10 py-4">
                <ul>
                  {row.GoodPoints.map((icon) => {
                    return (
                      <li key={icon} className="py-1">
                        <FontAwesomeIcon
                          className="green-icon mr-2"
                          icon="check-circle"
                          size="1.5x"
                        />
                        {icon}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-2 mt-5 md:mt-0">
            <div className="bg-red-600 h-2  "></div>
            <div className="bg-red-500 bg-opacity-30">
              <h1 className="text-center text-xl pt-2 ">Bad Points</h1>
              <div className="px-10 py-4">
                <ul>
                  {row.BadPoints.map((icon) => {
                    return (
                      <li key={icon} className="py-1">
                        <FontAwesomeIcon
                          className="red-icon mr-2"
                          icon="times-circle"
                          size="1.5x"
                        />
                        {icon}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-32 pt-8">
          <h1 className="text-center md:text-left text-4xl">Specifications</h1>
          <Table tableData={row.Specifications} />
        </div>
      </div>
    </div>
  );
}
export default ProductReview;
