import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { useEffect } from "react";
import { fetchAllCart } from "./cardSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, totalQty } = useSelector((state) => state.cart);
  
  useEffect(() => {
    async function fetchCarts(params) {
      try {
        await dispatch(fetchAllCart());
      } catch (error) {
        console.log(error)
        throw new Error("Unable to get Carts Data")
      }
    }
    fetchCarts()
  }, []);

  return (
    <>
      {cartItems.length &&
        cartItems?.map((dts, index) => (
          <CartList
            qty={dts.quantity}
            key={index}
            img={dts.product.img}
            tittle={dts.product.tittle}
            price={dts.product.price}
            id = {dts.product._id}
            // oldPrice={dts.oldPrice}
          />
        ))}
      <div className="p-3 rounded-lg border-2 border-dashed border-primary">
        <h1 className="font-semibold text-lg">Bill Details</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h1 className="font-semibold">
            &#x20B9;{cartItems?.reduce((a, p) => a + p.product.price, 0)}
          </h1>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <h1 className="font-semibold">&#x20B9;0.0</h1>
        </div>
        <div className="flex justify-between border-t mt-2">
          <h1 className="font-semibold text-lg">Total</h1>
          <h1 className="font-semibold text-lg">
            &#x20B9;......
            {/* {cartItems?.reduce((a, p) => a + p.product.price * totalQty, 0)} */}
          </h1>
        </div>
      </div>
    </>
  );
}

export default CartPage;
