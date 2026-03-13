import styles from "./ModalBase.module.css";

interface ModalBaseProps {
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

export const ModalBase: React.FC<ModalBaseProps> = ({
  children,
  onClose,
  showCloseButton = true,
}) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
};
