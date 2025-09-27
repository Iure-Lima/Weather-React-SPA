import { useOutletContext } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css"

type OutletContext = {
  handleCityName: (city: string) => void;
};

function Home(){
  const { handleCityName } = useOutletContext<OutletContext>();
  return <>
    <SearchBar callback={handleCityName} />
  </>
}

export default Home;