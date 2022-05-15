import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div className="bg-white rounded-md shadow-sm pl-2 pr-16 py-1 shadow-gray-200 h-64 overflow-hidden overflow-y-scroll absolute top-7 left-0 translate-y-1 transition-all duration-1000 ease-out">
      {List.map((item, i) => {
        return (
          <Link
            key={i}
            to={item}
            className="block capitalize mb-2 hover:underline"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Departments;

const List = [
  "savings & featured shops",
  "groceries",
  "electronics",
  "clothings, shoes & accessories",
  "home funitures & appliances",
  "toys & video games",
  "home improvements",
  "baby",
  "patio",
  "household essentials",
  "beauty",
  "personal care",
];
