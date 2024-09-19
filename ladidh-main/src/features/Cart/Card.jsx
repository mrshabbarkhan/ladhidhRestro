import { useNavigate } from "react-router-dom";
import AddToButton from "../../components/AddToButton";
import { useDispatch } from "react-redux";
import { addToProductDetails } from "../Product-list/productDetailSlice";

function Card(props) {
  const { img, pack, tittle, discount, code, price, oldPrice, redirect } = props;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToProductDetails(props));
    navigate(redirect)
  }
  return (
    <section className=" max-w-[16rem] min-w-[16rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg">
      <img
        src={img}
        alt={img}
        className="object-cover object-center m-auto w-40 h-40 rounded-t-xl"
        onClick={handleClick}
      />
      <div className="px-2 mt-1">
        <p className="text-xs font-medium text-primary-dark">{pack}</p>
        <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
          {tittle}
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
          <AddToButton {...props} redirect={"/cart"} />
        </div>
      </div>
    </section>
  );
}

export default Card;
