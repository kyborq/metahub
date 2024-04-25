import { createBrowserRouter } from "react-router-dom";

import { GamePage, HomePage, Root } from "./pages";
import { ApplyPage } from "./pages/ApplyPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <GamePage />,
      },
      {
        path: "/apply/:id",
        element: <ApplyPage />,
      },
    ],
  },
]);
