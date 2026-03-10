import { createContext, useContext } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import styles from "./LayoutProvider.module.css";

const LayoutContext = createContext({});

export const LayoutProvider = () => {
  return (
    <LayoutContext.Provider value={{}}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.page}>
          <Outlet />
        </div>

        <div className={styles.footer}>
          <p>Verkshojd Studios</p>
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
