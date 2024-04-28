import { createBrowserRouter } from "react-router-dom";

import { ApplyPage, HomePage, ProfilePage, Root } from "@/pages";

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
        path: "/profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "/apply/:id",
        element: <ApplyPage />,
      },
    ],
  },
]);
