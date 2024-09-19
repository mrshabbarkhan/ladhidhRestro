import { useSelector } from "react-redux";
import FavoriteList from "../Favorites/FavoriteList";
import { useParams } from "react-router-dom";

function ProductListPage() {
  const { products } = useSelector(state => state.adminDashboard)
  const param = useParams()

  const filterByCatId = products.filter(item => item.cat_id === param.id)
  
  if (!filterByCatId.length) {
    return <h1 className="text-center text-lg">No Item Found</h1>
  }

  return (
    <>
      {filterByCatId?.map((dtl, index) => (
        <FavoriteList
          key={index}
          img={dtl.img}
          pack={dtl.pack}
          tittle={dtl.title}
          discount={dtl.discount}
          code={dtl.code}
          price={dtl.price}
          oldPrice={dtl.oldPrice}
        />
      ))}
    </>
  );
}

export default ProductListPage;
