import { useDispatch } from "react-redux";
import { allProducts, removeProduct } from "../../../redux/adminAuth/adminActionSlice";
import { useState } from "react";
import EditProductPopup from "./EditProductPopup";

function ProductCard({ info }) {
  const { img, pack, title, discount, code, price, oldPrice, _id } = info;
  const [showEditProduct, setShowEditProduct] = useState(false)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeProduct(id))
    dispatch(allProducts());
  }

  if (showEditProduct) {
    return <EditProductPopup setShow={setShowEditProduct} product={info} />
  }

  return (
    <section className="flex flex-col justify-between max-w-[16rem] min-w-[16rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg">
      <img
        src={img}
        alt={img}
        className="object-cover object-center w-40 h-40 m-auto rounded-t-xl"
      />
      <div className="px-2 mt-1  bottom-0">
        <p className="text-xs font-medium text-primary-dark">{pack}</p>
        <h1 className=" text-md text-gray-800 leading-6 font-medium">
          {title}
        </h1>
        {discount && (
          <p className="text-xs mt-2 text-orange-500">
            FLAT {discount} off Code: {code}
          </p>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl text-primary-dark font-semibold">
              &#x20B9; {price}
            </h1>
            <span className="line-through text-gray-500 font-medium">
              {oldPrice}
            </span>
          </span>
          <span className="flex space-x-2">
            <div onClick={()=>setShowEditProduct(true)} className="border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer">
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div
              onClick={() => handleDelete(_id)}
              className="border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
            >
              <i className="fa fa-trash-alt "></i>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
