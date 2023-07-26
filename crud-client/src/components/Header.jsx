import { useState, useContext } from "react";
import CrudContext from "../context/CrudContext";
import avatar from "../assets/businessman.svg";
import logo from "../assets/shop.svg";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [login, setLogin] = useState(false);

  const { loginStatus } = useContext(CrudContext);

  const loginClick = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }

    loginStatus();
  };

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
          <a
            href="#"
            target="_self"
            className="btn btn-ghost normal-case text-xl"
          >
            <img src={logo} className="w-12" />
            <h1 className="font-bold text-xl lg:text-3xl">SHINY SHOES</h1>
          </a>
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
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                {login ? (
                  <a onClick={() => loginClick()} href="#">
                    Logout
                  </a>
                ) : (
                  <a onClick={() => loginClick()} href="#">
                    Register/Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
