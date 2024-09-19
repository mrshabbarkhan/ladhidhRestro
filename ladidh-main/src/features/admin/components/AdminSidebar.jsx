import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutSvg from "../../../assets/ui/LogoutSvg";
import { logOut } from "../../redux/userAuth/authSlice";

const AdminSidebar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="author-box h-screen w-52 bg-gray-200 relative overflow-hidden ">
      <ul className="flex flex-col  gap-4 text-left pl-5 pt-5 text-lg text-white">
        <NavLink
          to={"/"}
          className=" w-full px-2 py-1 rounded-l-lg text-black flex items-center text-white-600"
        >
          <span>
            <i className="fa-solid fa-home mr-2 text-blue-500"></i>Home
          </span>
        </NavLink>

        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-gray-500"
            }`
          }
        >
          <i className="fa-solid fa-gauge mr-2 "></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to={"/admin/products"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-gray-500"
            }`
          }
        >
          <i className="fa-brands fa-product-hunt mr-2"></i>
          <span>Products</span>
        </NavLink>

        <NavLink
          to={"/admin/category"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-gray-500"
            }`
          }
        >
          <span>
            <i className="fa-solid fa-list mr-2"></i>Categories
          </span>
        </NavLink>

        <NavLink
          to={"/admin/banners"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-gray-500"
            }`
          }
        >
          <span>
            <i className="fa-solid fa-panorama mr-2"></i>Banners
          </span>
        </NavLink>

        <NavLink
          to={"/admin/users"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-gray-500"
            }`
          }
        >
          <span>
            <i className="fa-solid fa-people-group mr-2"></i>Users
          </span>
        </NavLink>

        <NavLink
          to={"/"}
          className="bg-red-500 w-full px-2 py-1 rounded-l-lg flex items-center text-white-600 absolute bottom-5"
        >
          <li>
            <div
              className="nav-link flex items-center "
              onClick={() => dispatch(logOut())}
            >
              <span className="dz-icon mr-2">
                <LogoutSvg />
              </span>
              <span>Logout</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
