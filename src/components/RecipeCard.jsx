
import "../styles/recipecard.css"
import {useContext} from 'react'
import {FavouriteContext} from "./FavouriteContext"
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);
    const navigate = useNavigate()

    const handekCardClick=()=>navigate(`/recipe/${recipe.idMeal}`)

    function handelClick(e){
        e.stopPropagation()
        if(favourites.some(fav=>fav.idMeal===recipe.idMeal)){
            removeFromFavourites(recipe)
        }else{
            addToFavourites(recipe)
        }
    }

  return (
    <>
    
        <div className="card" onClick={handekCardClick}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            
            <div className="card-content">
                <h3>{recipe.strMeal}</h3>
                <p><strong>Category:</strong> {recipe.strCategory}</p>
            </div>
            
            <button className={favourites.some(fav=>fav.idMeal===recipe.idMeal)?"rem-btn":"add-btn"} onClick={handelClick}>
                {favourites.some(fav=>fav.idMeal===recipe.idMeal)?"Remove from Favourites":"Add to Favourites"}
            </button>
           
        </div>

     
    </>
  )
}

export default RecipeCard