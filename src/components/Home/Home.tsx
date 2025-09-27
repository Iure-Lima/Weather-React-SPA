import SearchBar from "../SearchBar/SearchBar";
import "./Home.css"

interface Props {
  handleCity: (cityName:string) => void
}

function Home({handleCity}:Props){
  return <>
    <SearchBar callback={handleCity} />
  </>
}

export default Home;