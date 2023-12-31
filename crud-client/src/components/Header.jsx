// import { useContext } from "react";
// import CrudContext from "../context/CrudContext";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import avatar from "../assets/businessman.svg";
import logo from "../assets/shop.svg";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  // const { testAccess } = useContext(CrudContext);

  // const apiClick = () => {};

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <AiOutlineMenu size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl"
          >
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Man</a>
            </li>
            <li>
              <a>Kids</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">
              <img src={logo} className="w-12" />
              <h1 className="font-bold text-xl lg:text-3xl">SHINY SHOES</h1>
            </a>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end mx-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <AiOutlineShoppingCart size={32} />
                <span className="badge badge-sm indicator-item bg-red-700 text-slate-100">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end mx-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={isAuthenticated ? user.picture : avatar}
                  alt={isAuthenticated ? user.name : "profile pic"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl"
            >
              <li>
                <Link to="/profile">
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </Link>
              </li>
              <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
              <li>
                <Link to="/cart">
                  <a>Test API</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
