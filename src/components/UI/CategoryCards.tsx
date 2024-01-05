import React from "react";
import { categories_array } from "../../utils/data/data";

const CategoryCards = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-7 carousel carousel-end rounded-box">
        {categories_array.slice(0.7).map((item, index) => {
          return (
            <div
              key={index}
              className="carousel-item cursor-pointer hover:shadow-xl my-5 flex flex-col p-4 w-48 h-48 bg-light rounded-lg"
            >
              <div>
                <p className="text-lg">{item.label}</p>
                <p className="text-sm text-dark_gray">{item.description}</p>
              </div>
              <div>
                <img src={item.img} alt={item.img} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-7 carousel carousel-end rounded-box">
        {categories_array.slice(7, 14).map((item, index) => {
          return (
            <div
              key={index}
              className="carousel-item cursor-pointer hover:shadow-xl my-5 flex flex-col p-4 w-48 h-48 bg-light rounded-lg"
            >
              <div>
                <p className="text-lg">{item.label}</p>
                <p className="text-sm text-dark_gray">{item.description}</p>
              </div>
              <div>
                <img src={item.img} alt={item.img} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryCards;
