import { getNewReleased } from "../../services/fetch";
import styles from "../../assets/styles/newReleased.module.css";
import { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
const NewReleased = () => {
  const [newTvShow, setTvShow] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [movies, setMovies] = useState(false);
//   const [tvShows, setTvShows] = useState(false);

  async function fetchMovies() {
    try {
      const trendingMovies = await getNewReleased("movie");
      setNewMovies(trendingMovies);
      setMovies(true);
      //   setTvShows(false);
    } catch (error) {
      return error;
    }
  }

  async function fetchTvShows() {
    try {
      const trendingTvShows = await getNewReleased("tv");
      setTvShow(trendingTvShows);
      setMovies(false);
    //   setTvShows(true);
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
        <div className={styles.newReleases}>New Releases</div>
        <div className={styles.newReleasesBtn}>
          <button className={styles.movies} onClick={fetchMovies}>
            Movies
          </button>
          <button className={styles.tvshows} onClick={fetchTvShows}>
            Tv Shows
          </button>
        </div>
      </div>

      {movies ? (
        <div className={styles.moviesCards}>
          <MoviesCard trendingMovies={newMovies} />
        </div>
      ) : (
        <div className={styles.moviesCards}>
          <MoviesCard trendingMovies={newTvShow} />
        </div>
      )}
     
    </div>
  );
};

export default NewReleased;
