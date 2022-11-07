import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LayoutCMS from "../layouts/LayoutCMS";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterUser from "../views/RegisterUser";
import RegisterResto from "../views/RegisterResto";
import Dashboard from "../views/Dashboard";
import ListProductPage from "../views/ListProductPage";
import AddProductPage from "../views/AddProductPage";
import { ChartPage } from "../views/ChartPage";
import EditProductPage from "../views/EditProductPage";
import ListOrderPage from "../views/ListOrderPage";

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
        path: "/admin/list-order",
        element: <ListOrderPage />,
      },
      {
        path: "/admin/add-product",
        element: <AddProductPage />,
      },
      {
        path: "/admin/edit-product/:id",
        element: <EditProductPage />,
      },
      {
        path: "/admin/chart",
        element: <ChartPage />,
      },
    ],
  },
]);

export default router;
