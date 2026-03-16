import { Link } from "react-router-dom";
import { PopUpImage } from "../../../../components/PopUpImage/PopUpImage";
import styles from "./GDSAPage.module.css";
import image1 from "/gdsa.png";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import Markdown from "react-markdown";
import { LatestReleaseMd } from "./log/mdData/releasesMd";

export const GDSAPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={styles.container}>
      <h1>Gosh Darn Space Aliens</h1>
      <PopUpImage
        containerStyle={{
          height: isMobile ? "200px" : "340px",
          position: "absolute",
          top: isMobile ? "108px" : "84px",
          left: isMobile ? "8px" : "72px",
          zIndex: 0,
        }}
        imageStyle={{ borderRadius: "8px" }}
        imageSrc={image1}
        altText="Gosh Darn Space Aliens"
      />
      <div className={styles.statusContainer}>
        <h2>In Development</h2>
        <Link to="/games/gdsa/log" className={styles.logLink}>
          View Log
        </Link>
      </div>

      <span className={`${styles.description} ${styles.gameDescription}`}>
        <h3>About the game</h3>
        <p>
          An horizontal shmup (side scrolling shoot 'em up) game where players
          defends the planet from alien invaders. The game is inspired by
          classic arcade games.
        </p>
        <p>
          The graphics is in concept stage but will stay claymation for
          interactive elements. Background and static elements concept are in
          progress, Soon™
        </p>
        <p>
          The game is being developed in a custom engine for web. The game will
          be available on Browser, Window, Mac and hopefully Linux.
        </p>

        <span>
          <a
            className={styles.itchLink}
            href="https://verkshojd.itch.io/gosh-darn-space-aliens"
            target="_blank"
          >
            Play test on itch.io
          </a>
        </span>
      </span>

      <span className={`${styles.description} ${styles.releaseNotes}`}>
        <h3>Release Notes</h3>
        <span className={styles.markdown}>
          <Markdown>{LatestReleaseMd}</Markdown>
        </span>
      </span>
    </div>
  );
};
