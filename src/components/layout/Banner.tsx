import  { useState, useEffect } from "react";
import styles from "../../assets/styles/banner.module.css";

const movies = [
  {
    name: "Strays",
    image:
      "https://static.adjaranet.com/movies/covers/1920/850/878619850-c8b4b1b1a8f7eaf9ded76d5827c23434.jpg",
  },
  {
    name: "The Pod Generation",
    image:
      "https://static.adjaranet.com/movies/covers/1920/488/878619488-0f34df7fd8c27b2fc107e951fcbcec90.jpg",
  },
  {
    name: "Who Is Erin Carter?",
    image:
      "https://static.adjaranet.com/movies/covers/1920/99/878619099-9eae0854945533050d0ac4a9960d8e1a.jpg",
  },
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? movies.length - 1 : prevIndex - 1
      );
    }, 500); // Delay to allow for fade out animation
  };

  const goToNextImage = () => {
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Delay to allow for fade out animation
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 8000); // Auto movement every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const currentMovie = movies[currentImageIndex];

  return (
    <div className={styles.cont}>
      <div className={styles.carousel}>
        <button
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={goToPreviousImage}
        >
          &lt;
        </button>
        <div className={styles.image}>
        
            <div className={styles.nothing}></div>
            <img
              src={currentMovie.image}
              alt={`Image ${currentImageIndex + 1}`}
              className={styles.carouselImage}
            />
            <p className={styles.title}>{currentMovie.name}</p>
        </div>
        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={goToNextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Banner;
