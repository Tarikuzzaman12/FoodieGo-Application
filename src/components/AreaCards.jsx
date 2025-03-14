"use client";
import { useEffect, useState } from "react";

const AreaCards = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("/area.json")
      .then((res) => res.json())
      .then((data) => setAreas(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6">We deliver to:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
          >
    
            <img
              src={area.image}
              alt={area.area}
              width={300}
              height={200}
              className="w-full h-40 object-cover opacity-80 transition duration-300 hover:opacity-100"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-3">
              <h3 className="text-lg font-bold">{area.area}</h3>
              <p className="text-sm">{area.restaurants} Restaurants</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaCards;
