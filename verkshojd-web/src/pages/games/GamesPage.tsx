import styles from "./GamesPage.module.css";
import { CardLink } from "./components/cardLink/CardLink";
import { gamesData } from "./data/gameData";

export const GamesPage = () => {
  return (
    <div className={styles.container}>
      <h1>Games</h1>
      <div className={styles.gamesGrid}>
        {gamesData.map((game) => (
          <CardLink
            key={game.title}
            title={game.title}
            description={game.description}
            link={game.link}
            imageSrc={game.imageSrc}
            state={game.state}
          />
        ))}
      </div>
    </div>
  );
};
