import {
  HomePageProvider,
  useHomePageContext,
} from "./provider/HomePageProvider";

export const HomePage = () => {
  const { text } = useHomePageContext();
  return (
    <HomePageProvider>
      <h1>{text}</h1>
      <p></p>
    </HomePageProvider>
  );
};
