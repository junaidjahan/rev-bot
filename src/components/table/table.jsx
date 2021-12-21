function Table({ tableData }) {
  const specs = [
    "Camera Resolution (MP)",
    "Front camera resolution (MP)",
    "Internal memory (GB) View more details.",
    "Battery capacity (mAh)",
    "Screen resolution ",
    "Display size (inch)",
    "Weight (g)",
  ];
  return (
    <table className="min-w-full table-fixed">
      <tbody>
        {specs.map((spec) => {
          if (Math.abs(specs.indexOf(spec) % 2) == 1) {
            return (
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {spec}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {tableData[specs.indexOf(spec)]}
                </td>
              </tr>
            );
          } else {
            return (
              <tr class="bg-gray-100 border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {spec}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
