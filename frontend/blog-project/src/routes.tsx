import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <h2>Login Page</h2>,
  },
]);

export default router;
