import { useSelector } from "react-redux";
import Card from "../Cart/Card";

function SaleForYou() {
  const navigateToProductList = "/product-details";

  const { products=[] } = useSelector((state) => state.adminDashboard)

  const showOnlyGreaterDisc = 5
  const ifProductsHaveDiscount = products?.filter(product => product.discount>showOnlyGreaterDisc)

  return (
    <section className="mt-6 font-medium text-lg w-full">
      <h1 className="mb-2">Sale for you</h1>
      <div className="flex gap-5 overflow-x-auto w-full ">
        {ifProductsHaveDiscount?.map((dtl, index) => (
          <Card
            key={index}
            id={dtl._id}
            img={dtl.img}
            pack={dtl.pack}
            tittle={dtl.title}
            discount={dtl.discount}
            code={dtl.code}
            price={dtl.price}
            // oldPrice={dtl.oldPrice}
            redirect={navigateToProductList}
          />
        ))}
      </div>
    </section>
  );
}

export default SaleForYou;
