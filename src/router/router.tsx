import React from "react";
import { RouteObject, Navigate } from "react-router-dom";
import TodoComponent from "../components/TodoComponent";

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="app" /> },
  {
    path: "app",
    element: <TodoComponent />,
  },
];

export default routes;
