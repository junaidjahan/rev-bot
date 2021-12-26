function Table({ tableData }) {
  const specs = [
    "Camera Resolution (MP)",
    "Front camera resolution (MP)",
    "Internal memory (GB)",
    "Battery capacity (mAh)",
    "Screen resolution ",
    "Display size (inch)",
    "Weight (g)",
  ];
  return (
    <table className="min-w-full table-fixed mt-5">
      <tbody className="">
        {specs.map((spec) => {
          if (Math.abs(specs.indexOf(spec) % 2) == 1) {
            return (
              <tr class="bg-white border-b grid grid-cols-2 text-right md:text-left ">
                <td class="px-6 py-4  font-medium  text-gray-900">{spec}</td>
                <td class="px-6 py-4  font-medium  text-gray-900 ">
                  {tableData[specs.indexOf(spec)]}
                </td>
              </tr>
            );
          } else {
            return (
              <tr class="bg-gray-100 border-b grid grid-cols-2 text-right  md:text-left">
                <td class="px-6 py-4  font-medium text-gray-900">{spec}</td>
                <td class="px-6 py-4  font-medium text-gray-900">
                  {tableData[specs.indexOf(spec)]}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
