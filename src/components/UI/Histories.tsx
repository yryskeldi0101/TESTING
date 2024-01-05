import React from "react";
import { profiles_array } from "../../utils/data/data";

const Histories = () => {
  return (
    <div className="flex items-center mt-10 justify-between carousel w-full gap-5">
      {profiles_array.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center justify-center carousel-item relative"
        >
          <div className={`w-14 h-14 rounded-full border `}>
            <img src={icon.img} alt={icon.img} />
          </div>
          <p className="text-xs">{icon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Histories;
