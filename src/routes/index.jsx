import { createBrowserRouter } from "react-router-dom";
import LayoutChat from "../layouts/LayoutChat";
import Inicio from "../pages/Inicio";
import Chat from "../components/Chat";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutChat />,
        children: [
            { path: "/", element: <Inicio /> },
            { path: "/gemini-flash", element: <Chat /> },
        ]
    },
])
