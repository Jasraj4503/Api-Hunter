import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import "../assets/css/Sidebar.css"

const Sidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow"
            style={{ width: "260px", height: "100%", position: "fixed" }}
        >
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
                <img src={Logo} alt="" height={55} className="me-2" />
                <span className="fs-5 fw-bold">Product<br />Management</span>
            </a>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link text-dark"

                        style={{ fontSize: "18px" }}
                    >
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/addCategory"
                        className="nav-link text-dark"
                        style={{ fontSize: "18px" }}
                    >
                        Add Category
                    </NavLink>
                </li>

                <li className="nav-item mt-2">
                    <NavLink
                        to="/category-list"
                        className="nav-link text-dark"
                        style={{ fontSize: "18px" }}
                    >
                        Category List
                    </NavLink>
                </li>

                <li className="nav-item mt-2">
                    <NavLink
                        to="/productForm"
                        className="nav-link text-dark"
                        style={{ fontSize: "18px" }}
                    >
                        Product Form
                    </NavLink>
                </li>

            </ul>

            <hr />

            <div className="text-muted small">© 2025</div>
        </div>
    );
};

export default Sidebar;
