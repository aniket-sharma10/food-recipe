import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../components/context/searchContext";

function Details() {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, addFavorite, favorites } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);

  async function fetchRecipe() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetails(data?.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  return (
    <div className="container mx-auto py-10 px-10 grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className=" lg:row-start-auto order-0 lg:order-5">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt={recipeDetails?.recipe?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-200"
          />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded order-1 lg:order-5 text-black pl-4 lg:pl-10 gap-3">
        <span className="text-base text-blue-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate">
          {recipeDetails?.recipe?.title}
        </h3>

        <div>
          <span className="text-2xl font-semibold">Ingredients:</span>
          <ul className="flex flex-col gap-3 mt-2">
            {recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="text-xl font-medium">
                  {ingredient.quantity}{ingredient.unit}
                </span>&nbsp;
                <span className="text-xl font-medium">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={() => addFavorite(recipeDetails?.recipe)} className="p-3 px-8 mb-4 rounded-lg uppercase text-base font-medium tracking-wider mt-3 inline-block bg-black text-white">
            {
              favorites && favorites.length>0 && favorites.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1 ? "Remove from favorites" : "Add to favorites"
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
