import React from "react";

const ButtonComp = (props) => {
  return (
    
      <button className="border bg-blue-500 px-6 py-2 text-white rounded-md">{props.name}</button>
    
  );
};

export default ButtonComp;
