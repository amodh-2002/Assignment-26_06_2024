import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Axios from "./pages/Axios";
import Cards from "./pages/Cards";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cards",
        element: <Cards />,
        children: [],
      },
      {
        path: "/axios",
        element: <Axios />,
      },
      {
        path: "/cards/card1",
        element: <Card1 />,
      },
      {
        path: "/cards/card2",
        element: <Card2 />,
      },
      {
        path: "/cards/card3",
        element: <Card3 />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
