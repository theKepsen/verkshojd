import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LogPage } from "./pages/log/LogPage";
import { LayoutProvider } from "./providers/LayoutProvider/LayoutProvider";
import type React from "react";

const router = createHashRouter([
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

interface RoutesProps {}
export const AppRoutes: React.FC<RoutesProps> = () => {
  return <RouterProvider router={router} />;
};
