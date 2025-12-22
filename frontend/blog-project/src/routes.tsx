import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import MainLayout from "./core/components/layouts/MainLayout";
// import LoginForm from "./core/components/users/LoginForm";
// import RegisterForm from './core/components/users/RegisterForm';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      // {
      //   path: "/login",
      //   element: <LoginForm onClose={() => console.log("Close")} />
      // },
      // {
      //   path: "/register",
      //   element: <RegisterForm />
      // }
    ],
  },
]);

export default router;
