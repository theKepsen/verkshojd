//import { useMainState } from "../../providers/MainStateProvider/MainStateProvider";
import { PopUpImage } from "../../components/PopUpImage/PopUpImage";
import { HomePageProvider } from "./provider/HomePageProvider";
import img from "/verkshojden.png";
import styles from "./HomePage.module.css";
import { gamesData } from "../games/data/gameData";
import { CardLink } from "../games/components/cardLink/CardLink";

export const HomePage = () => {
  return (
    <HomePageProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.fanty}>
            <PopUpImage
              containerStyle={{
                width: "500px",
                maxHeight: "70%",
                margin: "0",
                marginTop: "48px",
                marginLeft: "25%",
              }}
              imageSrc={img}
              altText="Verkshojd Logo"
            />
          </div>
          <div className={styles.info}>
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
            <span>Hey! Check out this cool game!</span>
          </div>
        </div>
        <span className="veryImportantInformation">
          This is some very important information that should be highlighted.
        </span>
      </div>
    </HomePageProvider>
  );
};
