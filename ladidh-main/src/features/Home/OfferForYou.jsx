import { useSelector } from "react-redux";

function OfferForYou() {
  const { banners=[] } = useSelector((state) => state.adminDashboard);
  return (
    <section className="mt-8 overflow-hidden">
      <h1 className="font-medium text-lg">Offer for you</h1>
      <div className="offer_img h-36 md:h-40  flex  gap-x-5 mt-2 overflow-auto">
        {banners?.map((bner, index) => {
          return <img key={index} className="max-w-80" src={bner.Img} alt={bner} />;
        })}
      </div>
    </section>
  );
}

export default OfferForYou;
