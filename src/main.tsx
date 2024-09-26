import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShallowPage from "./pages/UseShallowHook/Shallow.tsx";
import BearAndFishPage from "./pages/BearAndFish/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shallow",
    element: <ShallowPage />,
  },
  {
    path: "bearnfish",
    element: <BearAndFishPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
