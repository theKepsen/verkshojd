import styles from "./PopUpImage.module.css";
import { useLayout } from "../../providers/LayoutProvider/LayoutProvider";

interface PopUpImageProps {
  imageSrc: string;
  altText?: string;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export const PopUpImage: React.FC<PopUpImageProps> = ({
  imageSrc,
  altText = "Pop-up Image",
  containerStyle = {},
  imageStyle = {},
}) => {
  const { openImageModal } = useLayout();

  const handleClick = () => {
    openImageModal(imageSrc);
  };

  return (
    <div
      className={`imageContainer ${styles.imageContainer}`}
      onClick={handleClick}
      style={containerStyle}
    >
      <img src={imageSrc} alt={altText} style={imageStyle} />
    </div>
  );
};
