import { useEffect } from "react";
import NavigationBar from "../../components/Navs/NavigationBar";
// import { Categories_Items } from "../../utils/utils";
import Categories from "../Category/Categories";
import Category from "../Category/Category";
import OfferForYou from "./OfferForYou";
import SaleForYou from "./SaleForYou";
import TrendProducts from "./TrendProducts";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, fetchAllCategory, fetchBanners } from "../redux/adminAuth/adminActionSlice";

function HomePage() {
  const navigateCategories = "/category";
  const { categories } = useSelector((state) => state.adminDashboard);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allProducts())
    dispatch(fetchBanners())
    dispatch(fetchAllCategory())
  }, [])

  
  return (
    <>
      <div className="pt-16 relative overflow-hidden">
        <Category heading={"Categories"} btn={"view all"}>
          {categories?.slice(0,6).map((dts) => (
            <Categories
              key={dts._id}
              img={dts.img}
              tittle={dts.name}
              redirect={navigateCategories}
            />
          ))}
        </Category>
        <OfferForYou />
        <SaleForYou />
        <TrendProducts />
        <NavigationBar />
      </div>
    </>
  );
}

export default HomePage;
