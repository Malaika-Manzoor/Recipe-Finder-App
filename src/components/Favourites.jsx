import {useContext,useEffect} from "react"
import {FavouriteContext} from "./FavouriteContext"
import RecipeCard from "./RecipeCard"
import "../styles/favourites.css"

function Favourites() {
  const {favourites} = useContext(FavouriteContext)
  const stick1 = "/images/fruit.png"
  const stick2 = "/images/falling-down.png"


  

  return (
    <>
        
      <div className="content">
          <img src={stick1} alt="" id="sticker"/>
          <img src={stick2} alt="" id="sticker2"/>
          <h2>My <span>Favourites</span></h2>
      </div>
          
            
      {favourites.length===0?<h3>No Favourites Yet</h3>:
          <div className="recipes-grid">
              {favourites.map((fav)=>(
                  <RecipeCard key={fav.idMeal} recipe={fav} />
              ))}
          </div>
      }
            
           
       
    </>
  )
}

export default Favourites