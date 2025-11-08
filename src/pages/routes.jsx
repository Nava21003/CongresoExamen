import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Inicio from "./Inicio";
import Participantes from "./Participantes";
import Registro from "./Registro";
import Gafete from "./Gafete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Inicio />,
        index: true,
      },
      {
        path: "/participantes",
        element: <Participantes />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/gafete/:id",
        element: <Gafete />,
      },
    ],
  },
]);
