import visa from "../../../assets/images/payment/visa.png";
import mastercard from "../../../assets/images/payment/mastercard.png";
import discover from "../../../assets/images/payment/discover.png";
import card from "../../../assets/images/payment/card.png";

import React, { useState } from "react";

function CreditDebit() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <button className="text-xs rounded-lg border border-dashed border-slate-400 py-1 px-2 font-semibold">
          Add Card +
        </button>

        <img
          className={`w-12 rounded-lg border-2 p-2 cursor-pointer ${
            selectedCard === "visa" ? "border-primary" : "border-slate-400"
          }`}
          src={visa}
          alt="Visa"
          onClick={() => handleCardSelect("visa")}
        />

        <img
          className={`w-10 rounded-lg border-2 p-1 cursor-pointer ${
            selectedCard === "mastercard"
              ? "border-primary"
              : "border-slate-400"
          }`}
          src={mastercard}
          alt="MasterCard"
          onClick={() => handleCardSelect("mastercard")}
        />

        <img
          className={`w-12 rounded-lg border-2 py-2 px-1 cursor-pointer ${
            selectedCard === "discover" ? "border-primary" : "border-slate-400"
          }`}
          src={discover}
          alt="Discover"
          onClick={() => handleCardSelect("discover")}
        />
      </div>
      <div className="relative">
        <img className="w-full h-full mt-5 rounded-lg" src={card} alt="" />
        <div className="absolute top-4 left-5 text-white text-xl">
          <h1 className="font-semibold">Credit Card</h1>
          <h1 className="font-semibold">4532 **** **** ****</h1>
              </div>
              <div className="absolute bottom-2 flex justify-between text-white w-full px-4">
                  <h1>04 / 25</h1>
                  <h1>Kevin Hard</h1>
              </div>
      </div>
    </>
  );
}

export default CreditDebit;
