import React, {useEffect,useState} from "react";
import Movie from "./components/Movie.jsx";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8014edc3631cbf3e40c16c0bb9f15cfb&page=1";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCHA_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=8014edc3631cbf3e40c16c0bb9f15cfb&query=";

function App() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    fetch(FEATURED_API)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setMovies(data.results)
    })
  },[])
  return (
    <div>
      {movies.length>1 && movies.map((movie) => {
        return <Movie key={movie.id} {...movie}  />;
      })}
    </div>
  );
}

export default App;
