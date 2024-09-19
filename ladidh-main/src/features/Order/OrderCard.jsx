import img from "../../assets/images/product/1.jpg";

function OrderCard({}) {
  return (
    <section className="flex justify-between my-6">
      <div className="flex gap-5">
        <img className="w-20 rounded-xl" src={img} alt="" />
        <div >
          <h1 className="font-semibold text-primary ">The Meat Shop</h1>
          <p className="text-sm leading-3 font-semibold">Fish + Fish Skinless + Cleaned Prawns</p>
          <p className="mt-3">07 Items</p>
        </div>
      </div>
      <div className="text-end space-y-6">
        <h3 className="text-primary font-semibold text-sm">Jan 13</h3>
        <button className="bg-red-200 text-primary-dark p-1 px-3 rounded-md text-sm hover:text-white hover:bg-primary">Reorder</button>
      </div>
    </section>
  );
}

export default OrderCard;
