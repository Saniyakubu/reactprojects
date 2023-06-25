import React from 'react';

const Filterbtn = ({ filterItems }) => {
  return (
    <div>
      <button
        onClick={filterItems}
        className="mb-4 ml-4 bg-yellow-300 p-2 w-20 hover:bg-yellow-200 font-bold hover:ease-in  transition-all duration-300  rounded-lg"
      >
        check
      </button>
    </div>
  );
};

export default Filterbtn;
