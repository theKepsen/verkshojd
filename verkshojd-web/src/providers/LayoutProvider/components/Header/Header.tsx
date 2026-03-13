import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <h1>Verkshöjd Studios</h1>
      <span className={styles.links}>
        <Link className={location.pathname === "/" ? styles.active : ""} to="/">
          Home
        </Link>
        <Link
          className={
            location.pathname.startsWith("/games") ? styles.active : ""
          }
          to="/games"
        >
          Games
        </Link>
        <Link
          className={location.pathname === "/log" ? styles.active : ""}
          to="/log"
        >
          Log
        </Link>
      </span>
      <span>
        <DropDownMenu />
      </span>
    </div>
  );
};
