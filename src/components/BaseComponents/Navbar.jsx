import React, { useReducer } from "react";
import { ReactComponent as Logo } from "../img/wplus-icon-white.svg";
import { ReactComponent as Box } from "../img/icons/circle.svg";
import { ReactComponent as Reorder } from "../img/icons/reorder.svg";
import { ReactComponent as Acct } from "../img/icons/account.svg";
import Departments from "./Departments";
import { MyItems } from "./MyItems";
import { Accounts } from "./Accounts";

const Reducer = (state, action) => {
  switch (action.type) {
    case "dept":
      return {
        dept: !state.dept,
        serv: state.serv,
        items: state.items,
        acct: state.acct,
      };
    case "serv":
      return {
        dept: state.dept,
        serv: !state.serv,
        items: state.items,
        acct: state.acct,
      };
    case "items":
      return {
        dept: state.dept,
        serv: state.serv,
        items: !state.items,
        acct: state.acct,
      };
    case "acct":
      return {
        dept: state.dept,
        serv: state.serv,
        items: state.items,
        acct: !state.acct,
      };
    default:
      return state;
  }
};

export const Navbar = () => {
  const [state, dispatch] = useReducer(Reducer, {
    dept: false,
    serv: false,
    items: false,
    acct: false,
  });

  return (
    <nav className="w-full flex justify-between gap-12 items-center px-5 bg-blue-500 py-2">
      <div className="capitalize w-1/12 flex gap-1 items-center">
        <span className="text-xl font-bold text-white">walmart</span>
        <Logo className="w-12 h-12" />
      </div>
      <div className="w-11/12 flex gap-1 items-center">
        <div
          className=" w-1/6 list flex items-center relative py-2 hover:bg-blue-700 bg-transparent rounded-lg"
          onMouseEnter={() => dispatch({ type: "dept" })}
          onMouseLeave={() => dispatch({ type: "dept" })}
        >
          <Box className="w-3 fill-white hover:fill-black text-white" />
          <div>
            <span className="text-white capitalize">Departments</span>
            {state.dept && <Departments />}
          </div>
        </div>
        <div
          className="w-1/6 list flex gap-1 items-center relative py-2 hover:bg-blue-700 bg-transparent rounded-lg"
          onMouseEnter={() => dispatch({ type: "serv" })}
          onMouseLeave={() => dispatch({ type: "serv" })}
        >
          <Box className="w-3 fill-white hover:fill-black text-white" />
          <div>
            <span className="text-white capitalize">services</span>
            {state.serv && <Departments />}
          </div>
        </div>
        <div className="w-3/5">
          <input
            type="search"
            className="w-11/12 mx-auto px-2 py-2 rounded-2xl border border-gray-400"
          />
        </div>
        <div
          className="w-1/6 list flex gap-1 items-center relative hover:bg-blue-700 bg-transparent rounded-lg"
          onMouseEnter={() => dispatch({ type: "items" })}
          onMouseLeave={() => dispatch({ type: "items" })}
        >
          <Reorder className="w-3 h-3 fill-white hover:fill-black text-white" />
          <div className="flex flex-col items-end px-1">
            <span className="text-white font-thin text-sm capitalize">
              reorder
            </span>
            <span className="text-white capitalize">my items</span>
            {state.items && <MyItems />}
          </div>
        </div>
        <div
          className="w-1/6 list flex gap-1 items-center relative hover:bg-blue-700 bg-transparent rounded-lg"
          onMouseEnter={() => dispatch({ type: "acct" })}
          onMouseLeave={() => dispatch({ type: "acct" })}
        >
          <Acct className="w-3 h-3 fill-white hover:fill-black text-white" />
          <div className="flex flex-col items-end px-1">
            <span className="text-white font-thin text-sm capitalize">
              signin
            </span>
            <span className="text-white capitalize">Accounts</span>
            {state.acct && <Accounts />}
          </div>
        </div>
      </div>
    </nav>
  );
};
