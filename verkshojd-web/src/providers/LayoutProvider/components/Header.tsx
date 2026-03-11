import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Verkshojd Studios</h1>
      <span className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/log">Log</Link>
      </span>
      <h1 style={{ color: "transparent", userSelect: "none" }}>
        Verkshojd Studios
      </h1>
    </div>
  );
};
