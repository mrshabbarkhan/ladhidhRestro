import { NavLink } from "react-router-dom";
import { NavItems } from "../../utils/utils";

function NavAllItems() {
  return (
    <div className=" grid grid-cols-5 transition ">
      {NavItems.map((route,index) => (
        <NavLink
          key={index}
          to={route.path}
          className={({ isActive }) =>
            `hover:cursor-pointer flex flex-col justify-center items-center px-6 py-2  ${
              isActive ? "bg-primary text-white" : "bg-white"
            }`
          }
        >
          <i className={`fa-solid fa-${route.class} text-lg`}></i>
          <span className="hover:cursor-pointer">{route.tittle}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default NavAllItems;
