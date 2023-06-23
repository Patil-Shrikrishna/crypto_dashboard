/* eslint-disable react/prop-types */

const DropDown = ({ value }) => {
  return (
    <select
      className=" rounded-md px-5 py-2 max-w-max min-w-max  text-sm border shadow-xs font-medium "
      name="charttype"
      id="charttype"
    >
      <option selected disabled hidden value={value}>
        {value}
      </option>
    </select>
  );
};

export default DropDown;
