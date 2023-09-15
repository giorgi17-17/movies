import { Link } from 'react-router-dom';
import styles from '../../assets/styles/moviesCard.module.css';

import { Movie } from "../../services/types";


type TrendingProps = {
  movie: Movie;
};

const basePosterUrl = 'https://image.tmdb.org/t/p/w185/';

const MoviesCard = ({ movie }: TrendingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.movieCard}>
        <div className={styles.imageContainer}>
          <Link to={`moviedetails/${movie.id}`}>
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
    </div>
  );
};

export default MoviesCard;
