import styles from "./GDSALogPage.module.css";
import Markdown from "react-markdown";
import { DemoTasksMd } from "./tasks/demoMd";
import { useState } from "react";
import { ReleasesMd, UpcomingReleasesMd } from "./tasks/releasesMd";
import { Link } from "react-router-dom";

export const GDSALogPage = () => {
  const [view, setView] = useState<"demo" | "releases">("demo");

  const getMdContent = () => {
    switch (view) {
      case "demo":
        return [DemoTasksMd];
      case "releases":
        return [ReleasesMd, UpcomingReleasesMd];
      default:
        return [""];
    }
  };

  const content = getMdContent();

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <span
          className={view === "demo" ? styles.active : ""}
          onClick={() => setView("demo")}
        >
          Demo Tasks
        </span>
        <span
          className={view === "releases" ? styles.active : ""}
          onClick={() => setView("releases")}
        >
          Releases
        </span>
        <Link to="/games/gdsa">Back to Game</Link>
      </div>

      <h3>{view === "demo" ? "Demo Tasks" : "Releases"}</h3>

      {content.length > 0 && (
        <div className={styles.mdContainer}>
          {content.map((md, index) => (
            <div
              key={index}
              style={{
                textAlign: "start",
                width: `${Math.floor(100 / content.length)}%`,
                borderRight:
                  content.length !== index + 1
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
