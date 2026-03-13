import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LayoutProvider } from "./providers/LayoutProvider/LayoutProvider";
import type React from "react";
import { GamesPage } from "./pages/games/GamesPage";
import { GDSAPage } from "./pages/games/childPages/gdsa/GDSAPage";
import { GDSALogPage } from "./pages/games/childPages/gdsa/log/GDSALogPage";

const router = createHashRouter([
  {
    Component: LayoutProvider,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/games",
        Component: GamesPage,
      },
      {
        path: "/games/gdsa",
        Component: GDSAPage,
      },
      {
        path: "/games/gdsa/log",
        Component: GDSALogPage,
      },
    ],
  },
]);

interface RoutesProps {}
export const AppRoutes: React.FC<RoutesProps> = () => {
  return <RouterProvider router={router} />;
};
