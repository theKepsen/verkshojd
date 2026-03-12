import styles from "./CardLink.module.css";
import { Link } from "react-router-dom";

interface CardLinkProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export const CardLink = ({
  title,
  description,
  link,
  imageSrc,
}: CardLinkProps) => {
  return (
    <Link to={link} className={styles.cardLink}>
      <div className={`imageContainer ${styles.imageContainer}`}>
        <img src={imageSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};
