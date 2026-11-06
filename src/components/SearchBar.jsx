import {useRef,useEffect,useMemo} from 'react'
import "../styles/searchbar.css"

function SearchBar({setSearch}) {
   
    const logo = "/images/search.png"
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    }, [])

  // i applied concept of debounce as everytime i am searching it takes times in loading in every alphabet
    const debounce = (func,delay)=>{
      let timer;
        return function(...args){
          clearTimeout(timer)
          timer = setTimeout(() => {
              func(...args)
          }, delay);

        }

    }

    //take stable or ye memorized krle ye function yehi kam karna hae
    const result = useMemo(() => debounce(setSearch,1000), []) 

    return (
    <>
        <div className="search-wrapper">
          
            <img src={logo} alt="" id="logoSearch"/>
            <input type="search" name="search" id="search"  placeholder='Search Here'
            ref={inputRef} onChange={(e)=>result(e.target.value)} />

        </div>
       
    </>
  )
}

export default SearchBar
