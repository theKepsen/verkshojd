// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./style/App.css";
import { MainStateProvider } from "./providers/MainStateProvider/MainStateProvider";
import { AppRoutes } from "./routes";

function App() {
  return (
    <MainStateProvider>
      <AppRoutes />
    </MainStateProvider>
  );
}

export default App;
