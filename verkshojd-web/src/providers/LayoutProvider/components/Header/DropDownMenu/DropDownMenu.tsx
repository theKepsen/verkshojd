import { Link } from "react-router-dom";
import { PopUpMenu } from "../../../../../components/PopUpMenu/PopUpMenu";
import { HamburgerMenuIcon } from "../../../../../icons/HamburgerMenuIcon";
import styles from "./DropDownMenu.module.css";

const MenuButton = () => {
  return (
    <div className={styles.menuButton}>
      <HamburgerMenuIcon />
    </div>
  );
};

const MenuContent = () => {
  return (
    <div className={styles.menuContent}>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
    </div>
  );
};

export const DropDownMenu = () => {
  return (
    <PopUpMenu buttonContent={<MenuButton />} menuContent={<MenuContent />} />
  );
};
