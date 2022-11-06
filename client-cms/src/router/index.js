import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LayoutCMS from "../layouts/LayoutCMS";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterUser from "../views/RegisterUser";
import RegisterResto from "../views/RegisterResto";
import Dashboard from "../views/Dashboard";
import ListProductPage from "../views/ListProductPage";
import AddProduct from "../views/AddProductPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
          if (localStorage.getItem("access_token")) throw redirect("/admin");
        },
      },
    ],
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
  {
    path: "/register-resto",
    element: <RegisterResto />,
  },
  {
    element: <LayoutCMS />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/list-product",
        element: <ListProductPage />,
      },
      {
        path: "/admin/add-product",
        element: <AddProduct />,
      },
    ],
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      } else if (
        localStorage.getItem("access_token") &&
        !localStorage.getItem("restoId")
      ) {
        throw redirect("/register-resto");
      }
    },
  },
]);

export default router;
