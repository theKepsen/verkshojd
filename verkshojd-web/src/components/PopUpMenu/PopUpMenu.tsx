import { useEffect, useRef, useState } from "react";
import styles from "./PopUpMenu.module.css";

export interface PopUpMenuProps {
  menuContent: React.ReactNode;
  buttonContent: React.ReactNode;
}

export const PopUpMenu: React.FC<PopUpMenuProps> = ({
  menuContent,
  buttonContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.popUpMenu} ref={menuRef}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        {buttonContent}
      </div>
      {isOpen && <div className={styles.menuContent}>{menuContent}</div>}
    </div>
  );
};
