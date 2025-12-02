import { Download, Github, House, Store } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#FFFFFF] w-11/12 mx-auto py-4 md:py-5">
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden"
              onClick={()=>setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className={`
                nav-links menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:hidden
                ${isOpen ? "block" : "hidden"}
              `}
            >
              <li className="flex items-center space-x-2 ">
                <House size={28}/> <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3]" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="flex items-center space-x-2">
                <Store size={28} /> <NavLink to="/apps">Apps</NavLink>
              </li>
              <li className="flex items-center space-x-2">
                <Download size={28}/> <NavLink to="/installation"> Installation</NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <Link
            to={"/"}
            className="btn btn-ghost text-2xl font-bold flex items-center"
          >
            <img src="/logo.png" alt="" className="w-12 h-12 mr-2" /> Apps
            Station
          </Link>
          </div>
          {/* <a href="#">Apps Station</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center space-x-10">
            <li className="flex items-center space-x-2">
             <House size={20}/> <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex items-center space-x-2">
             <Store size={20} />  <NavLink to="/apps">Apps</NavLink>
            </li>
            <li className="flex items-center space-x-2">
             <Download size={20}/> <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/tanvirshekh-dev" target="_blank"
            className="btn flex items-center py-3 px-4 rounded-sm bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white
         "
          >
            <Github />{" "}
            <span className="pl-2 font-semibold text-base">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;