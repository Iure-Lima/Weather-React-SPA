import { useRef } from 'react';
import './SearchBar.css'

function SearchBar(props: {callback: (cityName: string) => void;}){
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickIcon = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputRef.current){
      if (inputRef.current.value){
        props.callback(inputRef.current.value);
      }
    }
  }

  return (
    <div className='search-bar'>
      <span className="search-icon" onClick={handleClickIcon}></span>
      <form onSubmit={sendForm}>
        <input type="text" placeholder='White city name' id='city' ref={inputRef} autoComplete='false'/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;