import styles from "./GDSALogPage.module.css";
import Markdown from "react-markdown";
import { DemoTasksArtMd, DemoTasksMd, playTestDemoMd } from "./mdData/demoMd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectArtMd, projectMd } from "./mdData/projectMd";
import { useMediaQuery } from "../../../../../hooks/mediaQuery";

export const GDSALogPage = () => {
  const [view, setView] = useState<"playTest" | "demo" | "project">("playTest");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getMdContent = () => {
    switch (view) {
      case "demo":
        return [DemoTasksMd, DemoTasksArtMd];
      case "project":
        return [projectMd, projectArtMd];
      case "playTest":
        return [playTestDemoMd];
      default:
        return [""];
    }
  };

  const content = getMdContent();

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <span
          className={view === "playTest" ? styles.active : ""}
          onClick={() => setView("playTest")}
        >
          Play Test Demo
        </span>
        <span
          className={view === "demo" ? styles.active : ""}
          onClick={() => setView("demo")}
        >
          Demo Tasks
        </span>
        <span
          className={view === "project" ? styles.active : ""}
          onClick={() => setView("project")}
        >
          Project Tasks
        </span>

        <Link to="/games/gdsa">Game Page</Link>
      </div>

      {content.length > 0 && (
        <div className={styles.mdContainer}>
          {content.map((md, index) => (
            <div
              key={index}
              style={{
                textAlign: "start",
                width: `${!isMobile ? Math.floor(100 / content.length) : 100}%`,
                borderRight:
                  content.length !== index + 1 && !isMobile
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "none",
                padding: "0 16px",
              }}
            >
              <Markdown>{md}</Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
