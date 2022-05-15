import React from 'react'
import { Link } from 'react-router-dom';

export const MyItems = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-5 bg-white rounded-md shadow-sm py-3 shadow-gray-200 h-min absolute top-9 left-0 translate-y-1 transition-all duration-1000 ease-out">
      <Link to={"/reorders"} className="capitalize hover:underline">
        reorder
      </Link>
      <Link to={"/links"} className="capitalize hover:underline">
        links
      </Link>
      <Link to={"/registeries"} className="capitalize hover:underline">
        registeries
      </Link>
    </div>
  );
}