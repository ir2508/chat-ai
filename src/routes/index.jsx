import { createBrowserRouter } from "react-router-dom";
import LayoutChat from "../layouts/LayoutChat";
import Inicio from "../pages/Inicio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutChat />,
        // children: [
        //     {path: index, element: <Inicio />}
        // ]
    },
])
