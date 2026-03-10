import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { LogPage } from "./pages/log/LogPage";
import { LayoutProvider } from "./providers/LayoutProvider/LayoutProvider";

export const router = createBrowserRouter([
  {
    Component: LayoutProvider,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/log",
        Component: LogPage,
      },
    ],
  },
]);
