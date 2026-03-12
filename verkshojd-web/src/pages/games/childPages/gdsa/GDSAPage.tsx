import styles from "./GDSAPage.module.css";

export const GDSAPage = () => {
  return (
    <div className={styles.container}>
      <h1>Gosh Darn Space Aliens</h1>
      <span className={styles.description}>
        <h2>In development</h2>
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
    </div>
  );
};
