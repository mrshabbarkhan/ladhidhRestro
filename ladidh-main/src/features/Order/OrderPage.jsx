import OrderCard from "./OrderCard";

function OrderPage() {
  return (
    <>
      <div className="relative">
        <h1 className="font-semibold">Today</h1>
        <OrderCard />
        <h1 className="font-semibold">This Month</h1>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      {/* <div className="w-full bg-white text-center z-30 px-2  py-3 fixed bottom-0 left-0">
        <Link to={"/cart"}>
          <div className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white">
            ADD TO CART
          </div>
        </Link>
      </div> */}
    </>
  );
}

export default OrderPage;
