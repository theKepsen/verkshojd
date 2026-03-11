import { Link } from "react-router-dom";
import { PopUpMenu } from "../../../../../components/PopUpMenu/PopUpMenu";
import { HamburgerMenuIcon } from "../../../../../icons/HamburgerMenuIcon";

const MenuButton = () => {
  return (
    <div>
      <HamburgerMenuIcon />
    </div>
  );
};

const MenuContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        backgroundColor: "#242424",
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.295)",
        padding: "8px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/log">Log</Link>
    </div>
  );
};

export const DropDownMenu = () => {
  return (
    <PopUpMenu buttonContent={<MenuButton />} menuContent={<MenuContent />} />
  );
};
