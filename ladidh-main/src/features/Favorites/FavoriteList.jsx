import AddToButton from "../../components/AddToButton";

function FavoriteList(props) {
  const { img, pack, tittle, discount, code, price, oldPrice } = props
  return (
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow ">
        <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
          {tittle}
        </h1>
        {discount && (
          <p className="text-xs mt-2 text-orange-500">
            FLAT {discount} off Code: {code}
          </p>
        )}
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-primary-dark font-semibold">
            &#x20B9; {price}
          </h1>
          <span className="line-through text-gray-500 font-medium">
            {oldPrice}
          </span>
        </div>
        <p className="text-xs font-medium text-primary-dark">{pack}</p>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-24 rounded-lg object-cover" src={img} alt="" />
        <AddToButton {...props} />
      </div>
    </div>
  );
}

export default FavoriteList;
