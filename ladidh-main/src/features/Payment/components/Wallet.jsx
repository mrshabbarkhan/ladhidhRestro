import flag from "../../../assets/images/svg/india-flag-icon.svg";
function Wallet() {
  return (
    <>
      <h1 className="text-sm mb-2">Link Your Wallet</h1>
      <form>
        <a className="flex items-center  border-slate-300 border-2 px-2 rounded-lg  focus-within:border-primary">
          <img className="w-5" src={flag} alt="" />
          <span className="mx-2">91</span>
          <input
            type="number"
            placeholder="Enter your UPI ID"
            className="py-1 w-full rounded-lg px-2 focus:outline-none focus:border-primary"
          />
        </a>
        <button
          type="submit"
          className="text-white bg-primary w-full py-3 mt-4 font-semibold rounded-xl text-sm"
        >
          Continue
        </button>
      </form>
    </>
  );
}

export default Wallet;
