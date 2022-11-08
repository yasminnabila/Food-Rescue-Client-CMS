import { Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RestaurantBanner from "./RestaurantBanner";
import Swal from "sweetalert2";
import { FaHome, FaShoppingCart, FaRegChartBar } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../store/action/restaurants";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => {
    return state.restaurantReducer;
  });

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  const logOut = () => {
    localStorage.clear();
    Swal.fire("You have been logged out!");
    navigate(`/login`);
  };

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse position-absolute"
      // style={{ paddingTop: "80px" }}
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        {/* <RestaurantBanner /> */}
        <img
          src={
            process.env.PUBLIC_URL + "/assets/logo_savvie_transparant-01.png"
          }
          width="50"
          height="50"
          className="d-inline-block align-top mb-3"
          alt="Savvie Logo"
          onClick={() => navigate(`/`)}
        />
        <ul className="nav flex-column d-flex justify-content-start ">
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin`)}
              className="nav-link text-black small p-1"
            >
              <FaHome
                style={{ color: "#77AA9C", size: "30rem", marginRight: "10px" }}
              />
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/list-product`)}
              className="nav-link text-black small p-1"
            >
              <MdOutlineFastfood
                style={{ color: "#77AA9C", size: "30rem", marginRight: "10px" }}
              />
              Product
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/list-order`)}
              className="nav-link text-black small p-1"
            >
              <FaShoppingCart
                style={{ color: "#77AA9C", size: "30rem", marginRight: "10px" }}
              />
              Order
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/chart`)}
              className="nav-link text-black small p-1"
            >
              <FaRegChartBar
                style={{ color: "#77AA9C", size: "30rem", marginRight: "8px" }}
              />{" "}
              Statistics
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => logOut()}
              className="nav-link text-black small p-1"
              href="#login"
            >
              <SlLogout
                style={{ color: "#77AA9C", size: "30rem", marginRight: "10px" }}
              />{" "}
              Sign Out
            </Nav.Link>
          </li>
        </ul>

        <ul className="nav flex-column d-flex justify-content-start mt-3">
          <li className="nav-item d-flex justify-content-start">
            Welcome, {restaurant.name}!
          </li>
        </ul>

        <RestaurantBanner />
      </div>
    </nav>
  );
}

export default SideBar;
