import { useLocation } from "react-router-dom";
import CheckOutFooter from "../CheckOutFooter";
import NavAllItems from "./NavAllItems";


function NavigationBar() {
  const location = useLocation()
  const isOnCart = location.pathname === "/cart"

  return (
    <section className="w-full fixed bottom-0 left-0 md:px-24 lg:px-48 overflow-hidden text-xs sm:text-sm bg-white">
      {isOnCart ? <CheckOutFooter/> : <NavAllItems/>}
    </section>
  );
}

export default NavigationBar;
