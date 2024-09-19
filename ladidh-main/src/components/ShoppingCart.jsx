import { Link } from "react-router-dom";

function ShoppingCart() {
    return (
      <Link to={"/cart"}>
            <i className="fa fa-shopping-cart text-xl relative">
            <span className="absolute -top-3 -translate-x-1/2 w-6 text-center border-white border-2 text-white font-normal text-sm bg-primary rounded-full">3</span>
            </i>
      </Link>
    );
}

export default ShoppingCart
