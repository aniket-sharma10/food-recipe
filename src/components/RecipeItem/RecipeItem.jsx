import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <Link to={`/details/${item?.id}`}>
      <div className="flex flex-col w-80 overflow-hidden p-5 gap-5 hover:scale-105 duration-200 bg-white/85 shadow-md rounded-2xl border-2 border-white">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
          <img
            src={item?.image_url}
            alt={item?.title}
            className="block w-full"
          />
        </div>
        <div>
          <span className="text-base text-blue-700 font-medium">
            {item?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {item?.title}
          </h3>
          <button
            className="text-base mt-2  p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          >
            Recipe details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
