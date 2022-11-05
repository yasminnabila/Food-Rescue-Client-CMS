import NavBarCMS from "../components/NavBarCMS";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBarCMS />
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <div className="row">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
