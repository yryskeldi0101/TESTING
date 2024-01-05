import React from "react";
import BestsellersCards from "../components/UI/BestsellersCards";

const AuctionItems = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-10">Аукционные товары</h2>
      <BestsellersCards sale={true} />
    </div>
  );
};

export default AuctionItems;
