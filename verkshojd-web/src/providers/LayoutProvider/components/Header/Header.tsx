import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Verkshojd Studios</h1>
      <span className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/log">Log</Link>
      </span>
      <span>
        <DropDownMenu />
      </span>
    </div>
  );
};
