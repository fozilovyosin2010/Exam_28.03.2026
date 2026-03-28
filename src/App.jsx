import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import Info from "./Pages/Info";
import NotFound from "./Pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/todo", element: <Todo /> },
        { path: "/info/:id", element: <Info /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
