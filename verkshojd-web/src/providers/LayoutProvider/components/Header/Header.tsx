import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { DropDownMenu } from "./DropDownMenu/DropDownMenu";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import logo from "/VerkhojdLogoV1Vit.png";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="Verkshöjd Studios Logo"
        className={styles.logo}
        onClick={() => navigate("/")}
      />

      <span className={styles.links}>
        {!isMobile && (
          <>
            <Link
              className={location.pathname === "/" ? styles.active : ""}
              to="/"
            >
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
          </>
        )}
      </span>
      <span>{isMobile && <DropDownMenu />}</span>
    </div>
  );
};
