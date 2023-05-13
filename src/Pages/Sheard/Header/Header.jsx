import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import style from "./Header.module.css";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/home"} className={style.navItems}>
          Home
        </Link>
      </li>
      <li>
        <Link to={"/"} className={style.navItems}>
          About
        </Link>
      </li>
      <li>
        <Link to={"/"} className={style.navItems}>
          Services
        </Link>
      </li>
      <li>
        <Link to={"/"} className={style.navItems}>
          Blog
        </Link>
      </li>
      <li>
        <Link to={"/"} className={style.navItems}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className={`navbar bg-base-100 py-5 ${style.navbarWidth}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/*  */}

              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" width={"80px"} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <HiOutlineShoppingBag
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
          ></HiOutlineShoppingBag>
          <HiOutlineSearch
            style={{
              width: "24px",
              height: "24px",
              margin: "0 20px",
              cursor: "pointer",
            }}
          ></HiOutlineSearch>
          <button
            className="btn btn-outline "
            style={{ width: "170px", height: "56px", color: "#FF3811" }}
          >
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
