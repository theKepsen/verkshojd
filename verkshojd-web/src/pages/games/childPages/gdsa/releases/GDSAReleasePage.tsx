import styles from "./GDSAReleasePage.module.css";
import Markdown from "react-markdown";
import { ReleasesMd, UpcomingReleasesMd } from "./mdData/releasesMd";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../../../../hooks/mediaQuery";

export const GDSAReleasePage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const content = [ReleasesMd, UpcomingReleasesMd];

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to="/games/gdsa">Game Page</Link>
        <Link to="/games/gdsa/log">View Log</Link>
      </div>

      {content.length > 0 && (
        <div className={styles.mdContainer}>
          {content.map((md, index) => (
            <div
              key={index}
              style={{
                textAlign: "start",
                width: `${!isMobile ? Math.floor(100 / content.length) : 100}%`,
                borderRight:
                  content.length !== index + 1 && !isMobile
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "none",
                padding: "0 16px",
              }}
            >
              <Markdown>{md}</Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
