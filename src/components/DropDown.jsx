/* eslint-disable react/prop-types */

const DropDown = ({ value, list, set }) => {
  // const chartTypes = chartType?.map(({ id, type }) => (
  //   <option key={id} value={type}>
  //     {type}
  //   </option>
  // ));

  return (
    <select
      className="rounded-md px-5 py-2 max-w-max min-w-max text-sm border shadow-xs font-medium uppercase"
      name="charttype"
      id="charttype"
      // onChange={(e) => set(e.target.value)}
    >
      {list}
    </select>
  );
};

export default DropDown;
