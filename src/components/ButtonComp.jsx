/* eslint-disable react/prop-types */
const ButtonComp = ({ text, btnclass }) => {
  return (
    <button
      className={`${
        !btnclass ? "text-white bg-blue-700" : btnclass
      }  border  px-6 py-2  rounded-md font-medium`}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
