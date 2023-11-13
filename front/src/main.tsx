import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Root from "./routes/root";
import About from "./routes/about";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ParallaxProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <RouterProvider router={router} />
      </div>
    </ParallaxProvider>
  </React.StrictMode>,
);
