import { createContext, useContext, useState } from "react";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./LayoutProvider.module.css";
import { TestModal } from "../../components/modal/TestModal/TestModal";
import { YoutubeLinkIcon } from "../../icons/YoutubeLinkIcon";

const LayoutContext = createContext<{
  openTestModal: () => void;
  closeTestModal: () => void;
}>({
  openTestModal: () => {},
  closeTestModal: () => {},
});

export const LayoutProvider = () => {
  const [testModalOpen, setTestModalOpen] = useState(false);

  const openTestModal = () => {
    setTestModalOpen(true);
  };
  const closeTestModal = () => {
    setTestModalOpen(false);
  };

  return (
    <LayoutContext.Provider value={{ openTestModal, closeTestModal }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.page}>
          <Outlet />
        </div>

        <div className={styles.footer}>
          <p>Verkshöjd Studios</p>

          <a
            href="https://www.youtube.com/@verkshojd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", marginLeft: "auto" }}
          >
            <YoutubeLinkIcon height={18} />
          </a>
        </div>
      </div>
      {testModalOpen && <TestModal />}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
