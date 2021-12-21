import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../../components/table/table";
import mobileImages from "../../../images/pixel-6.jpg";

function ProductReview() {
  const goodPoints = [
    "Premium, unique design",
    "Great display",
    "Long battery life",
    "Versatile, upgraded cameras",
    "Customizable UI and exclusive features",
    "Competitive price tag",
  ];
  const badPoints = [
    "Pokey fingerprint sensor",
    "No telephoto camera",
    "Not powerful enough long-term",
    "Slow charging",
    "Bad Camera Designs",
    "Single sim jack",
  ];

  return (
    <div className="mt-5 bg-gray-100">
      <div className="container py-10">
        <h1 className="text-5xl">Google Pixel 6</h1>
        <h1 className="text-2xl my-2">Priced at $500</h1>
        <div className="flex justify-center">
          <img
            src={mobileImages}
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
                  {goodPoints.map((icon) => {
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
          <div className="mx-2">
            <div className="bg-red-600 h-2  "></div>
            <div className="bg-red-500 bg-opacity-30">
              <h1 className="text-center text-xl pt-2 ">Bad Points</h1>
              <div className="px-10 py-4">
                <ul>
                  {badPoints.map((icon) => {
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
          <h1>Specifications</h1>
          <Table
            tableData={[
              "12,12",
              "12",
              "128",
              "3110",
              "1792 x 828",
              "6.1",
              "194",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductReview;
