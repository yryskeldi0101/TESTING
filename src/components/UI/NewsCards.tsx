import React from "react";
import { news_array } from "../../utils/data/data";
import illustration from "../../assets/icons/illustration.svg";

const NewsCards = () => {
  return (
    <div className="carousel w-full flex items-center gap-5 ">
      {news_array.map((item, index) => {
        return (
          <div
            className="carousel-item flex items-center justify-between rounded-2xl bg-light p-3"
            key={index}
          >
            <div className="w-1/2">
              <h1 className="text-2xl">-{item.discount}</h1>
              <p className="text-lg mt-1">{item.title}</p>
              <button className="btn bg-blue text-light px-6 py-3 mt-5">
                Подробнее
              </button>
            </div>
            <div className="w-1/2">
              <img src={illustration} alt={illustration} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCards;
