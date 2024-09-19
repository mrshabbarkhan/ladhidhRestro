import { useSelector } from "react-redux";
import FavoriteList from "./FavoriteList";

import datanotfound from "../../../public/notdatafound.jfif";

function FavoritesPage() {
  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);
  if (favoriteProducts.length == 0) {
    return (
      <div className="flex justify-center object-cover">
        <img src={datanotfound} className="object-cover object-center -translate-y-6" alt="data not found" />
      </div>
    );
  }

  return (
    <>
      {favoriteProducts.map((dtl, index) => (
        <FavoriteList
          key={index}
          img={dtl.img}
          pack={dtl.pack}
          tittle={dtl.tittle}
          discount={dtl.discount}
          code={dtl.code}
          price={dtl.price}
          oldPrice={dtl.oldPrice}
        />
      ))}
    </>
  );
}

export default FavoritesPage;
