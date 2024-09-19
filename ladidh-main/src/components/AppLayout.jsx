import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "./Navs/Navbar";
import InnerNavbar from "./Navs/InnerNavbar";
import NavigationBar from "./Navs/NavigationBar";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pathName1 = location.pathname === "/category" && "Categories";
  const pathName2 = location.pathname === "/favorites" && "Favorite";
  const pathName3 = location.pathname === "/cart" && "Cart";
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname === "/product-list" && "Product List";
  const pathName6 = location.pathname === "/orders" && "Orders";
  const pathName7 = location.pathname === "/payment" && "Payment";
  const pathName8 = location.pathname.startsWith("/product-list") && "Product-list";

  return (
    <>
      <div className="pt-16 px-2 md:px-24 lg:px-48 reletive top-0 overflow-hidden mb-20 ">
        {isHomePage ? (
          <Navbar />
        ) : (
          <InnerNavbar>
            {pathName1 || pathName2 || pathName3 || pathName4 || pathName5 || pathName6 || pathName7 || pathName8}
          </InnerNavbar>
        )}

        <main className="pt-5">
          <Outlet />
        </main>
        
        {!pathName5 ? <NavigationBar /> : null}
      </div>
    </>
  );
}

export default AppLayout;
