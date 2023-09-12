import { Link } from "react-router-dom";
import styles from "../../assets/styles/header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link className={styles.link} to={"/"}>
            Show Minder
          </Link>
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link className={styles.navlink} to={"/"}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navlink} to={"/movies"}>
                Movies
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navlink} to={"/tvshows"}>
                Tv Series
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navlink} to={"/account"}>
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
