import { useMainState } from "../../providers/MainStateProvider/MainStateProvider";
import {
  HomePageProvider,
  useHomePageContext,
} from "./provider/HomePageProvider";
import img from "/verkshojden.png";

export const HomePage = () => {
  const { text } = useHomePageContext();
  const { test } = useMainState();
  return (
    <HomePageProvider>
      <h1>{text}</h1>
      <p>{test}</p>
      <div
        className="imageContainer"
        style={{ width: "500px", margin: "0 auto" }}
      >
        <img src={img} alt="Verkshojd Logo" />
      </div>
      <span className="veryImportantInformation">
        This is some very important information that should be highlighted.
      </span>
    </HomePageProvider>
  );
};
