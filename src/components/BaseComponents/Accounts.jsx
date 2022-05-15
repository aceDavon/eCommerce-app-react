import React from "react";

export const Accounts = () => {
  return (
    <div className="bg-white rounded-md shadow-sm py-3 shadow-gray-200 h-min absolute top-9 left-0 translate-y-1 transition-all duration-1000 ease-out">
      <form className="flex flex-col gap-3">
        <legend className="font-bold capitalize text-center text-lg">
          Login
        </legend>
        <input
          type="text"
          className="w-9/12 mx-auto px-1 py-2 rounded-xl focus:outline-none border border-gray-400"
        />
        <input
          type="password"
          className="w-9/12 mx-auto px-1 py-2 rounded-xl focus:outline-none border border-gray-400"
        />
        <button className="bg-red-700 text-white p-2 rounded-md border-none hover:brightness-125 w-3/5 mx-auto">
          Login
        </button>
      </form>
    </div>
  );
};
