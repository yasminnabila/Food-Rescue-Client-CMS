// import NavBarCMS from "../components/NavBarCMS";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <NavBarCMS /> */}
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <div className="row">
          <SideBar />
          <div
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            style={{
              minHeight: "100vh",
              backgroundColor: "#77AA9C",
              // paddingTop: "70px",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
