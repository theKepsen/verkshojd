//import { useMainState } from "../../providers/MainStateProvider/MainStateProvider";
import { PopUpImage } from "../../components/PopUpImage/PopUpImage";
import {
  HomePageProvider,
  useHomePageContext,
} from "./provider/HomePageProvider";
import img from "/verkshojden.png";

export const HomePage = () => {
  const { text } = useHomePageContext();

  return (
    <HomePageProvider>
      <h1>{text}</h1>
      <PopUpImage
        containerStyle={{ width: "500px", maxHeight: "70%", margin: "0 auto" }}
        imageSrc={img}
        altText="Verkshojd Logo"
      />
      <span className="veryImportantInformation">
        This is some very important information that should be highlighted.
      </span>
    </HomePageProvider>
  );
};
