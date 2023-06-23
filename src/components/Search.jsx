/* eslint-disable react/prop-types */

const Search = ({ inputClass,placeholder }) => {
  return (
 
     <input
      className={`w-full  py-1.5 px-4 focus:outline-none  ${inputClass}`}
      type="text"
      name="search"
      placeholder={placeholder}
    />
   
  );
};

export default Search;
