function DsbActions() {
  return (
    <section className="flex justify-between flex-wrap gap-2 ">
      <div className="bg-purple-700  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER PENDING</p>
          <h1 className="font-bold text-xl">1</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <i className="fa-regular fa-clock "></i>
        </div>
      </div>
      <div className="bg-red-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER CENCEL</p>
          <h1 className="font-bold text-xl">0</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
      <div className="bg-blue-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER PROCESS</p>
          <h1 className="font-bold text-xl">5</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
      <div className="bg-green-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>TOTAL INCOME</p>
          <h1 className="font-bold text-xl">&#8377; 100</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
    </section>
  );
}

export default DsbActions;
