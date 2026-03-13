import { createContext, useContext, useState } from "react";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./LayoutProvider.module.css";
import { TestModal } from "../../components/modal/TestModal/TestModal";
import { Footer } from "./components/Footer/Footer";
import { ImageModal } from "../../components/modal/ImageModal/ImageModal";

const LayoutContext = createContext<{
  openTestModal: () => void;
  closeTestModal: () => void;
  openImageModal: (imageSrc: string) => void;
  closeImageModal: () => void;
}>({
  openTestModal: () => {},
  closeTestModal: () => {},
  openImageModal: () => {},
  closeImageModal: () => {},
});

export const LayoutProvider = () => {
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState<string | null>(null);

  const openTestModal = () => {
    setTestModalOpen(true);
  };
  const closeTestModal = () => {
    setTestModalOpen(false);
  };
  const openImageModal = (imageSrc: string) => {
    setImageModalOpen(imageSrc);
  };
  const closeImageModal = () => {
    setImageModalOpen(null);
  };
  return (
    <LayoutContext.Provider
      value={{ openTestModal, closeTestModal, openImageModal, closeImageModal }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.page}>
          <Outlet />
        </div>

        <Footer />
      </div>
      {testModalOpen && <TestModal />}
      {imageModalOpen && <ImageModal imageSrc={imageModalOpen} />}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
