import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RestaurantBanner from "./RestaurantBanner";

function SideBar() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    //    Swal.fire("You have been logged out!");
    navigate(`/login`);
  };
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <RestaurantBanner />
        <ul className="nav flex-column ">
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin`)}
              className="nav-link text-black small"
            >
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/list-product`)}
              className="nav-link text-black small"
            >
              Product
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/`)}
              className="nav-link text-black small"
            >
              Order
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/`)}
              className="nav-link text-black small"
            >
              Statistics
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/`)}
              className="nav-link text-black small"
            >
              Help
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/`)}
              className="nav-link text-black small"
            >
              Settings
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => logOut()}
              className="nav-link text-black small"
              href="#login"
            >
              Sign Out
            </Nav.Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
