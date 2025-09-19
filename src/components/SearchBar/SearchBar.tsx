import { useRef } from 'react';
import './SearchBar.css'

function SearchBar(){
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickIcon = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='search-bar'>
      <span className="search-icon" onClick={handleClickIcon}></span>
      <form action="">
        <input type="text" placeholder='White city name' id='city' ref={inputRef} autoComplete='false'/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;