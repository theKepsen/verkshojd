import { YoutubeLinkIcon } from "../../../../icons/YoutubeLinkIcon";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Verkshöjd Studios</p>

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
