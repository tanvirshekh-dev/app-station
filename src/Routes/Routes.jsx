import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading...</p>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('../appsData.jsx'),
        element: <Home></Home>
      },
      {
        path: "/apps",
        element: <Apps></Apps>
      },
      {
        path: "/installation",
        element: <Installation></Installation>
      }
    ],
  },
]);

export default router;
