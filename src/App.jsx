
import NavBar from "./components/NavBar"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import FavouriteContextProvider from "./components/FavouriteContext"
import Favourites from "./components/Favourites"
import Details from "./components/Details"
import Home from "./components/Home"
import {useState } from "react"



function App() {
 const [search, setSearch] = useState("")

  return (
    <>
      <FavouriteContextProvider>
        <BrowserRouter>
          <NavBar setSearch={setSearch}/>
            
              <Routes>
                <Route path="/" element={<Home search= {search}/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
                <Route path="/recipe/:id" element={<Details/>}/>
              </Routes>
        </BrowserRouter>
        
      </FavouriteContextProvider>
    </>

  )
}
export default App

