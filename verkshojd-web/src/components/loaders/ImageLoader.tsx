import styles from "./ImageLoader.module.css";

interface LoadingImageProps {
  width: number;
  style?: React.CSSProperties;
}

export const LoadingImage: React.FC<LoadingImageProps> = ({ width, style }) => {
  const height = Math.round(width * 0.57);
  return (
    <div className={styles.placeholder} style={{ width, height, ...style }}>
      <div className={styles.animatedBackground}></div>
    </div>
  );
};
