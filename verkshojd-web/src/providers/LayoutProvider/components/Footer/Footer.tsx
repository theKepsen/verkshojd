import { ItchLinkIcon } from "../../../../icons/ItchLinkIcon";
import { YoutubeLinkIcon } from "../../../../icons/YoutubeLinkIcon";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Verkshöjd Studios</p>

      <a
        href="https://verkshojd.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.itchLink}
      >
        <ItchLinkIcon height={18} width={80} />
      </a>
      <a
        href="https://www.youtube.com/@verkshojd"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.youtubeLink}
      >
        <YoutubeLinkIcon height={18} />
      </a>
    </div>
  );
};
