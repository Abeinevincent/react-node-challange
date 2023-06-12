import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Agents from "./Agents/Agents";
import SingleAgent from "./Agents/SingleAgent";
import App from "./App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/agents/:id",
    element: <SingleAgent />,
  },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
