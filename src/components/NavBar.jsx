
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import SearchBar from './SearchBar'

function NavBar({setSearch}) {

  const navImage= "/images/apple.png"
  const navImage2= "/images/strawberry.png"
  
  return (
    <>
    
      <header className="navbar-header">

        <div className="container">
          
          <img src="/images/halo-halo.png" alt="" id="logo"/>
          <h2 id="title"><span id="brand-name"> Mili </span>Recipes</h2>
          <img src={navImage} alt="" id="navImage"/>

          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </nav>

          <img src={navImage2} alt="" id="navImage2"/>
          <SearchBar setSearch={setSearch}/>
        </div>
           
      </header>
    
    </>
  )
}

export default NavBar