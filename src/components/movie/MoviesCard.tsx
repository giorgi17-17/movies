import { Link } from "react-router-dom";
import styles from "../../assets/styles/moviesCard.module.css";

type trending = {
  id: number;
  title: string;
  vote_average: number;
  media_type: string;
  release_date: string;
  overview: string;
  poster_path: string;

  // Add more properties as needed
};

type trendingProps = {
  trendingMovies: trending[];
};
const basePosterUrl = "https://image.tmdb.org/t/p/w185/";

const MoviesCard = ({ trendingMovies }: trendingProps) => {
  // console.log(trendingMovies);
  return (
    <div className={styles.container}>
      {trendingMovies.slice(0, 14).map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <div className={styles.imageContainer}>
            <Link
              
              to={`moviedetails/${movie.id}`}
            >
              <img
                src={`${basePosterUrl}${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
            </Link>
          </div>
          <div className={styles.movieInfo}>
            <h2 className={styles.movieName}>{movie.title}</h2>
            <p className={styles.movieScore}>
              <span className={styles.num}>{movie.vote_average.toFixed()} </span>
                IMDB
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesCard;
