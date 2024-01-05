import React from "react";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import { bestsellers_array } from "../../utils/data/data";
import clsx from "clsx";

type Props = {
  sale: boolean;
};
const BestsellersCards = ({ sale }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      {bestsellers_array.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-light rounded-lg pt-0 p-2 sm:w-64 w-[100%] sm:h-[420px] h-500px"
          >
            <div>
              <div className="w-full flex items-center justify-end">
                <div className="bg-gray-200 p-1 rounded-md  absolute z-10 mt-10">
                  <img className="w-8 h-8" src={item.icon} alt={item.icon} />
                </div>
              </div>
              <img className="w-full" src={item.image} alt={item.image} />
            </div>
            <div className="h-16">
              <p className="mt-2">{item.title}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                {sale && (
                  <span className="text-red text-xl font-bold">
                    {item.price}
                  </span>
                )}
                <span className={clsx("text-xl", sale && "line-through")}>
                  {item.price}
                </span>
              </div>
              <span className="text-green">{item.availability}</span>
              <span className="text-blue">{item.set}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <button className="btn btn-circle">
                <img src={minus} alt={minus} />
              </button>
              <span>{item.discount}</span>
              <button className="btn btn-circle">
                <img src={plus} alt={plus} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestsellersCards;
