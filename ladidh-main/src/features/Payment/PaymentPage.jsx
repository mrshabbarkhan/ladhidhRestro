import Accordion from "./Accordion";
import CreditDebit from "./components/CreditDebit";
import GooglePay from "./components/GooglePay";
import Netbanking from "./components/Netbanking";
import Wallet from "./components/Wallet";

function PaymentPage() {
  const data = [
    {
      title: "Case on Delivery",
      content: "Carry on your cash payment...Thanx!",
      icon: "fa-solid fa-money-bill me-2",
    },
    {
      // title: "Credit/Debit Card",
      title: "Coming soon..",
      element: <CreditDebit />,
      icon: "fa-solid fa-credit-card me-2",
    },
    {
      // title: "Google Pay/Other",
      title: "Coming soon..",
      element: <GooglePay />,
      icon: "fa-solid fa-money-check me-2",
    },
    {
      // title: "Netbanking",
      title: "Coming soon..",
      element: <Netbanking />,
      icon: "fa-solid fa-building-columns me-2",
    },
    {
      // title: "Wallet",
      title: "Coming soon..",
      element: <Wallet />,
      icon: "fa-solid fa-wallet me-2",
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-lg">Select Payment mode</h1>
      <div>
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            icon={item.icon}
            element={item.element}
          />
        ))}
      </div>
      <div className="w-full bg-white text-center z-30 px-2  py-3 fixed bottom-0 left-0">
        <div className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white">
          Continue
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
