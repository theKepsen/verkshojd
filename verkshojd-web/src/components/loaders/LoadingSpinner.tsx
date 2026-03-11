import type { CSSProperties } from "react";
import styles from "./LoadingSpinner.module.css";
import { LoadingSpinnerIcon } from "../../icons/LoadingSpinnerIcon";

interface LoadingSpinnerProps {
  showText?: boolean;
  customText?: string;
  style?: CSSProperties | undefined;
  spinColor?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  showText = false,
  customText = "Loading...",
  style = undefined,
  spinColor = null,
}) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.spinLoader}>
        {spinColor ? (
          <LoadingSpinnerIcon stroke={spinColor} />
        ) : (
          <LoadingSpinnerIcon />
        )}
      </div>
      {showText && <label className={styles.loadingText}>{customText}</label>}
    </div>
  );
};
