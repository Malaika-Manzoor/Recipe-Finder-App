import { useParams ,useNavigate} from "react-router-dom"
import { useState,useEffect } from "react"
import "../styles/detail.css"

function Details() {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    const [recipes, setRecipes] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const cross = "/images/close.png"

    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resolve)=>resolve.json())
      .then((data)=>{
        
          if (data.meals && data.meals.length > 0) {
              setRecipes(data.meals[0]);
          } else {
              setError("Recipe not found!");
          }

          setLoading(false)
      })
      .catch((error)=>{
        setError(`Error:${error}`)
        setLoading(false)
      })
    
    
    }, [id])

  const ingredients = []
  let filterIng
  if(recipes){
      for (let i = 1; i <=20; i++) {
        ingredients.push(recipes[`strIngredient${i}`])
        
      }

       filterIng = ingredients.filter(ing=>ing && ing.trim()!=="")
     
  }
   
  return (
    <>
        {loading &&

            <div className="loading">
              <img src="/images/appleS.png" alt="Loading..." />
              <p>Loading recipe Detail...</p>
          </div>
        }

        {error && <h2>{error}</h2>}

        {recipes && (
          
            <div className="details-page">
              <div className="recipe-details">

                <button onClick={() => navigate(-1)}>
                    <img src={cross} alt="" id="close"/>
                </button>

                <img src={recipes.strMealThumb} alt={recipes.strMeal} />

                <h1>{recipes.strMeal}</h1>

                <p>Category: {recipes.strCategory}</p>

                <p>Cuisine: {recipes.strArea}</p>
                <div className="ingredients-section">
                    <h3>Ingredients:</h3>

                  <ul className="ingredients-list">
                      {filterIng.map((ing, index) => (
                          ing && <li key={index}>{ing}</li>
                      ))}
                  </ul>
                </div>
              

                <h2>Instructions</h2>

                <p>{recipes.strInstructions}</p>

            </div>
          </div>
           
        )}
    </>
  )
}

export default Details
