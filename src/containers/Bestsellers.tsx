import React from "react";
import BestsellersCards from "../components/UI/BestsellersCards";

const Bestsellers = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Хиты продаж</h2>
      <BestsellersCards sale={false} />
    </div>
  );
};

export default Bestsellers;
