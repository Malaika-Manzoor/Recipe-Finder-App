import {createContext,useState,useEffect} from 'react'

export const FavouriteContext = createContext()

function FavouriteContextProvider({children} ) {

    const [favourites, setFavourites] = useState(()=>{
          const saved = localStorage.getItem("favourites")
          return saved ? JSON.parse(saved):[]
    })

    useEffect(() => {
      localStorage.setItem("favourites",JSON.stringify(favourites))
    }, [favourites])
    

    function addToFavourites(recipe) {
    setFavourites(pre => [...pre, recipe])
    }

    function removeFromFavourites(recipe) {
    setFavourites(pre => pre.filter(fav=>fav.idMeal !==recipe.idMeal))
    }

  return (
    <FavouriteContext.Provider value={{favourites, addToFavourites, removeFromFavourites}}>
        {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteContextProvider