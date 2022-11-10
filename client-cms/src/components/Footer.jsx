import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="container fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
        <p className="mx-auto text-muted py-3 my-2">&copy; 2022 Savvie, Inc</p>

        {/* <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        ></a> */}

        {/* <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link px-2 text-muted">
              Partner Login
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul> */}
      </footer>
    </div>
  );
}
