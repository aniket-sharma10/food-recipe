import { createContext, useState } from "react";

export const SearchContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [favorites, setFavorites] = useState([])

  async function handleSubmit(e) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function addFavorite(CurrentItem){
    let cpyFavoriteList = [...favorites];
    const index = cpyFavoriteList.findIndex((item) => item.id === CurrentItem.id)

    if(index == -1){
      cpyFavoriteList.push(CurrentItem)
    }
    else{
      cpyFavoriteList.splice(index)
    }

    setFavorites(cpyFavoriteList)
  }

  return (
    <SearchContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        favorites,
        addFavorite
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default ContextProvider;
