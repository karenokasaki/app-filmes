import { useState } from "react";
import "./App.css";
import data from "./assets/movies";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            img={movie.backdrop_path}
            vote={movie.vote_average}
          />
        );
      })}
    </div>
  );
}

export default App;
