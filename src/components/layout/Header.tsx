import { Link } from "react-router-dom";
import styles from "../../assets/styles/header.module.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ""}`}
    >
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link className={`${styles.link} ${
                  isScrolled ? styles.scrollNavLink : ""
                }`} to={"/"}>
            Show Minder
          </Link>
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navlink} ${
                  isScrolled ? styles.scrollNavLink : ""
                }`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navlink} ${
                  isScrolled ? styles.scrollNavLink : ""
                }`}
                to={"/movies"}
              >
                Movies
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navlink} ${
                  isScrolled ? styles.scrollNavLink : ""
                }`}
                to={"/tvshows"}
              >
                Tv Series
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={`${styles.navlink} ${
                  isScrolled ? styles.scrollNavLink : ""
                }`}
                to={"/account"}
              >
                Account
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
