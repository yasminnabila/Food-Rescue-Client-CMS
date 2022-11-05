import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../views/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    // loader: () => {
    //   if (localStorage.getItem("access_token")) throw redirect("/");
    // },
  },
]);

export default router;
