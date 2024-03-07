import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { SearchContext } from "../context/searchContext";

function Navbar() {
  const { searchParam, setSearchParam,  handleSubmit} = useContext(SearchContext);
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    navigate('/')
    handleSubmit()
  }

  return (
    <nav className="flex justify-between items-center py-6 mx-auto w-full bg-black flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl ml-4 font-semibold">
        <NavLink
          to="/"
          className={
            `text-white rounded-full px-6 py-2 hover:bg-white duration-200 hover:text-black`
          }
        >
          Food Recipe
        </NavLink>
      </h2>

      <form onSubmit={submit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter items..."
          className="py-2 px-8 bg-white text-lg rounded-full outline-none lg:w-96"
        />
      </form>

      <div className="py-2 px-4">
        <ul className="px-4 flex justify-around">
          <li>
            <NavLink
              to="/"
              className={`text-white text-lg hover:text-black rounded-full duration-200 mr-4 hover:bg-white px-6 py-2`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={`text-white text-lg hover:text-black rounded-full duration-200 hover:bg-white px-6 py-2`}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
