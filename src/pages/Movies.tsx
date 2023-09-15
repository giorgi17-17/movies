import { useState, useEffect } from "react";
import { getMovieAndTv } from "../services/fetch";
// import MoviesCard from '../components/movie/MoviesCard';
import Card from "../components/movie/Card";
import { Movie } from "../services/types";
import styles from "../assets/styles/movies.module.css"

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const newMovies = await getMovieAndTv("movie", "popularity.desc");  
        setMovies(newMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filters}></div>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
