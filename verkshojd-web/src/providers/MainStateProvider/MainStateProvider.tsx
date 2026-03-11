import { createContext, useContext, useEffect, useState } from "react";

export const MainStateContext = createContext<{
  test: string;
}>({
  test: "",
});

export const MainStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [test, setTest] = useState("Test");

  useEffect(() => {
    setTest("Test 2");
  }, []);

  return (
    <MainStateContext.Provider value={{ test }}>
      {children}
    </MainStateContext.Provider>
  );
};

export const useMainState = () => useContext(MainStateContext);
