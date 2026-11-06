import {useState,useEffect} from 'react'
import RecipeCard from './RecipeCard'
import "../styles/recipecard.css"




function Home({search}) {

    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error ,setError] = useState("")


    const img1 = "/images/bobaRight.png"
    const img2 = "/images/StrawberryLeft.png"
    const img3 = "/images/peeking.png"
    const img4 = "/images/s2.png"
    const img5 = "/images/s1.png"
    const img6 = "/images/s3.png"
    const img7 = "/images/wave.png"
    const img8 = "/images/s5.png"

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true)
        setError("")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,{
            signal:controller.signal
        })
        .then((response)=>response.json())
        .then((data)=>{

            if (data.meals && data.meals.length > 0) {
            setRecipes(data.meals)
            
            }else{
                setRecipes([])
                setError("No Recipies Found")
                
            }
            setLoading(false)
        })
        .catch((error)=>{
            if (error.name !== "AbortError") {
            setError(`Error fetching recipes: ${error.message}`)
            setRecipes([])
            setLoading(false)
            }
        })
        return ()=>{
            controller.abort()
        }
        
    },[search])

    if(loading){
        return (
            <div className="loading">
                <img src="/images/appleS.png" alt="Loading..." />
                <p>Loading delicious recipes...</p>
            </div>
        );

    }

    if(error){
        return <h3>{error}</h3>
    }

  return (
    <>
        <div className="RecipeTitle">
            <img src={img1} alt="" id="img1"/>
            <h2 id="discover-recipes">Discover <span>Recipes</span> </h2>
            <img src={img2} alt="" id="img2"/>
        </div>
        
        <div className="RecipeSection">

            <img src={img5}alt=""className="topSticker"/>
            <img src={img6}alt=""className="topSticker2"/>
            <img src={img7}alt=""className="topSticker3"/>
            <img src={img8}alt=""className="topSticker4"/>

            <div className="recipes-grid">
                {recipes.map((recipe)=>(
                <RecipeCard  key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>

            <img src={img3}alt=""className="bottomSticker"/> 
            <img src={img4}alt=""className="bottomSticker2"/>

        </div>

       
    </>
  )
}

export default Home
