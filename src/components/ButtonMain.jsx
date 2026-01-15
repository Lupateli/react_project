import React from "react";

const ButtonMain = () => {
  return (
    <>
      <button className="bg-gray-600 text-white py-4 rounded w-full hover:bg-gray-800 transition-colors">
        Top Books
      </button>
      <button className="bg-gray-600 text-white py-4 rounded w-full hover:bg-gray-800 transition-colors">
        Category
      </button>
      <button className="bg-gray-600 text-white py-4 rounded w-full hover:bg-gray-800 transition-colors">
        Promotions
      </button>
    </>
  );
};

export default ButtonMain;
