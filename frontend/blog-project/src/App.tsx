import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
