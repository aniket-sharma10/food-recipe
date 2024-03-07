import React from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../components/context/searchContext'
import RecipeItem from '../../components/RecipeItem/RecipeItem'

function Favorites() {
    const {favorites} = useContext(SearchContext)


    return (
        <div className='py-8 container mx-auto flex flex-wrap text-white justify-center gap-10'>
            {
                favorites && favorites.length > 0 ? 
                    (favorites.map((item, index) => <RecipeItem key={index} item={item} />))
                : (<div><p className='text-3xl text-black mt-10 font-bold text-center'>No Favorites added.</p></div>)
            }
        </div>
    )
}

export default Favorites
