import React, { useContext } from 'react'
import { SearchContext } from '../../components/context/searchContext'
import RecipeItem from '../../components/RecipeItem/RecipeItem'

function Home() {
    const {loading, recipeList} = useContext(SearchContext)

    if(loading){
        return <div className='text-3xl font-bold text-white text-center'>Loading dishes..Please wait</div>
    }
    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {
                recipeList && recipeList.length > 0 ? 
                    (recipeList.map((item, index) => <RecipeItem key={index} item={item} />))
                : (<div><p className='text-3xl font-bold mt-10 text-center'>Nothing to show. Please search something.</p></div>)
            }
        </div>
    )
}

export default Home
