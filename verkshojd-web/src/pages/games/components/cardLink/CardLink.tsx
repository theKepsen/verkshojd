import styles from "./CardLink.module.css";
import { Link } from "react-router-dom";

interface CardLinkProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  state: string;
}

const getTagColorBg = (state: string) => {
  switch (state) {
    case "In Development":
      return "#FFA500"; // Orange
    case "Released":
      return "#4CAF50"; // Green
    case "Upcoming":
      return "#2196F3"; // Blue
    default:
      return "#888"; // Default gray
  }
};
const getTagColorText = (state: string) => {
  switch (state) {
    case "In Development":
      return "#2a2a2a"; // Dark gray
    case "Released":
      return "#ffffff"; // White
    case "Upcoming":
      return "#ffffff"; // White
    default:
      return "#888"; // Default gray
  }
};

export const CardLink = ({
  title,
  description,
  link,
  imageSrc,
  state,
}: CardLinkProps) => {
  const tagColor = getTagColorBg(state);

  return (
    <Link to={link} className={styles.cardLink}>
      <div className={`imageContainer ${styles.imageContainer}`}>
        <img src={imageSrc} alt={title} />
      </div>
      <span
        className={styles.tag}
        style={{ backgroundColor: tagColor, color: getTagColorText(state) }}
      >
        {state}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};
