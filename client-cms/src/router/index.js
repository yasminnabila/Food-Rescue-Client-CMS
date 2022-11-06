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
import { ChartPage } from "../views/ChartPage";

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
          if (
            localStorage.getItem("access_token") &&
            localStorage.getItem("restoId")
          )
            throw redirect("/admin");
          else if (localStorage.getItem("access_token"))
            throw redirect("/register-resto");
          // else throw redirect("/login");
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
      {
        path: "/admin/chart",
        element: <ChartPage />,
      },
    ],
  },
]);

export default router;
