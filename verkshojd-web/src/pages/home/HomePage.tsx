import { useMainState } from "../../providers/MainStateProvider/MainStateProvider";
import {
  HomePageProvider,
  useHomePageContext,
} from "./provider/HomePageProvider";

export const HomePage = () => {
  const { text } = useHomePageContext();
  const { test } = useMainState();
  return (
    <HomePageProvider>
      <h1>{text}</h1>
      <p>{test}</p>
      <span className="veryImportantInformation">
        This is some very important information that should be highlighted.
      </span>
    </HomePageProvider>
  );
};
