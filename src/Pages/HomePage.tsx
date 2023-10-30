import React from "react";
import shopLocation from "../Data/ShopLocation.json";
import provinceCode from "../Data/ProvinceCode.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("shopLocation", shopLocation);
  console.log("provinceCode", provinceCode);

  return (
    <div className="m-6">
      <div className="font-bold text-4xl">Choose shop</div>
      {shopLocation?.map((r, idx) => (
        <Link to={`shop/${r.code}`}>
          <div className="rounded-md border border-gray-300 p-4 mt-4 cursor-pointer hover:bg-green-300">
            {r.branch}
            {r.address}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
