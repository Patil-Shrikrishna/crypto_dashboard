import React from 'react';

const DropDown = (props) => {
  return (
    <div>
     
     <select className="bg-gray-100 rounded-md pl-3 py-1 w-28 text-sm border shadow-xs font-medium " name="charttype" id="charttype">
       
      <option className="my-2" selected disabled hidden value={props.value1}>{props.value1}</option>
      <option className="h-10" value={props.value2}>{props.value2}</option>
      <option className="py-2" value={props.value3}>{props.value3}</option>
      <option className="py-2" value={props.value4}>{props.value4}</option>
      
     </select>
    

    </div>
  )
}

export default DropDown;