import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LayoutCMS from "../layouts/LayoutCMS";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterUser from "../views/RegisterUser";
import RegisterResto1 from "../views/RegisterResto1";
import RegisterResto2 from "../views/RegisterResto2";
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
    path: "/register-resto-1",
    element: <RegisterResto1 />,
  },
  {
    path: "/register-resto-2",
    element: <RegisterResto2 />,
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
      {
        path: "/admin/chart",
        element: <ChartPage/>
      }
    ],
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      else if (
        localStorage.getItem("access_token") &&
        !localStorage.getItem("restoId")
      ) {
        throw redirect("/register-resto-1");
      }
    },
  },
]);

export default router;
