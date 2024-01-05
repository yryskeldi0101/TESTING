import React from "react";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import { bestsellers_array } from "../../utils/data/data";

type Props = {
  sale: boolean;
};
const BestsellersCards = ({ sale }: Props) => {
  return (
    <div>
      {bestsellers_array.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <img src={item.icon} alt={item.icon} />
              <img src={item.image} alt={item.image} />
            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div>
              {sale ? (
                <span className="text-red text-xl">{item.price}</span>
              ) : (
                <span className="line-through text-dark_gray text-lg">
                  {item.price}
                </span>
              )}
              <span>{item.availability}</span>
              <span>{item.set}</span>
            </div>
            <div>
              <img src={minus} alt={minus} />
              <span>{item.discount}</span>
              <img src={plus} alt={plus} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestsellersCards;
