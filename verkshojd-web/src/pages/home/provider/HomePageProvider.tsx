import { createContext, useContext, useState } from "react";

const HomePageContext = createContext<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}>({
  text: "Himla bra ord ju!",
  setText: () => {},
});

export const HomePageProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [text, setText] = useState("Himla bra ord ju!");
  return (
    <HomePageContext.Provider value={{ text, setText }}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => useContext(HomePageContext);
