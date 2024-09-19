function GooglePay() {
  return (
    <>
      <h1 className="text-xs mb-3">Link via UPI</h1>
      <form >
        <input
          type="text"
          placeholder="Enter your UPI ID"
          className="py-1 border-slate-300 border-2 w-full rounded-lg px-2 focus:outline-none focus:border-primary"
        />
        <button type="submit" className="text-white bg-primary w-full py-3 mt-4 font-semibold rounded-xl text-sm">
          Continue
        </button>
      </form>
    </>
  );
}

export default GooglePay;
