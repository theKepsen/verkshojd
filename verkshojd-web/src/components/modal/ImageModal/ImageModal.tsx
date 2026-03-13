import { useLayout } from "../../../providers/LayoutProvider/LayoutProvider";
import { ModalBase } from "../ModalBase";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  imageSrc: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageSrc }) => {
  const { closeImageModal } = useLayout();

  return (
    <ModalBase onClose={closeImageModal} showCloseButton={false}>
      <div
        className={`imageContainer ${styles.imageContainer}`}
        onClick={closeImageModal}
      >
        <img src={imageSrc} alt="Modal Image" />
      </div>
    </ModalBase>
  );
};
