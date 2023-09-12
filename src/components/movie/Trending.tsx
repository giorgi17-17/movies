import { getTrendingMovies, getTrendingTvShows } from "../../services/fetch";
import styles from "../../assets/styles/trending.module.css";
import { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [movies, setMovies] = useState(false);
  const [tvShows, setTvShows] = useState(false);

  async function fetchMovies() {
    try {
      const trendingMovies = await getTrendingMovies("week");
      setTrendingMovies(trendingMovies);
      setMovies(true);
      setTvShows(false);
    } catch (error) {
      return error;
    }
  }

  async function fetchTvShows() {
    try {
      const trendingTvShows = await getTrendingTvShows("week");
      setTrendingTvShows(trendingTvShows);
      setMovies(false);
      setTvShows(true);
    } catch (error) {
      return error;
    }
  } 

  useEffect(() => {
    fetchMovies();
    return () => {
      fetchMovies();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.trend}>
        <div className={styles.trending}>Trending</div>
        <button className={styles.movies} onClick={fetchMovies}>
          Movies
        </button>
        <button className={styles.tvshows} onClick={fetchTvShows}>
          Tv Shows
        </button>
      </div>

      {movies && (
        <div className={styles.moviesCards}>
          <MoviesCard trendingMovies={trendingMovies} />
        </div>
      )}
      {tvShows && (
        <div className={styles.moviesCards}>
          <MoviesCard trendingMovies={trendingTvShows} />
        </div>
      )}
    </div>
  );
};

export default Trending;
