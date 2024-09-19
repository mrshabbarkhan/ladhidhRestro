import { useEffect } from "react";
import Categories from "./Categories";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../redux/adminAuth/adminActionSlice";

function CategoryPage({ onClick }) {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCategory())
  },[])
  const { categories } = useSelector((state) => state.adminDashboard);
  return (
    <>
      <Category>
        {categories?.map((dts, index) => (
          <Categories
            key={index}
            id= {dts._id}
            img={dts.img}
            tittle={dts.name}
            redirect={onClick || `/product-list/${dts.cat_id}`}
          />
        ))}
      </Category>
    </>
  );
}

export default CategoryPage;
