import { useEffect, useState } from "react";
import shopLocation from "../Data/shopLocation.json";
import { Link } from "react-router-dom";
import { ShopDetail } from "../interface";
import { MdLocationPin } from "react-icons/md";
import Search from "../Components/Search";
import { AiFillShop } from "react-icons/ai";
import StatusCard from "../Components/StatusCard";

const HomePage: React.FC = () => {
  const [shopLocationData, setShopLocationData] =
    useState<ShopDetail[]>(shopLocation);
  const [filters, setFilters] = useState({
    name: "",
    province: "",
  });

  useEffect(() => {
    if (filters.province !== "" && filters.name !== "") {
      setShopLocationData(
        shopLocation?.filter(
          (r: ShopDetail) =>
            r.province === Number(filters.province) &&
            r.branch.includes(filters.name)
        )
      );
    } else if (filters.province !== "" && filters.name === "") {
      setShopLocationData(
        shopLocation?.filter(
          (r: ShopDetail) => r.province === Number(filters.province)
        )
      );
    } else if (filters.province === "" && filters.name !== "") {
      setShopLocationData(
        shopLocation?.filter((r: ShopDetail) => r.branch.includes(filters.name))
      );
    } else {
      setShopLocationData(shopLocation);
    }
  }, [filters]);

  return (
    <div className="md:m-6 m-2">
      <div className="font-bold text-4xl mb-4 flex gap-4 items-center">
        <div>Shops List</div>
        <AiFillShop />
      </div>
      <StatusCard shopLocationData={shopLocationData} />
      <Search setFilters={setFilters} />
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="w-full text-right px-4 pb-2">
          Totals : {shopLocationData?.length}
        </div>

        <div className="overflow-y-auto w-full h-screen grid md:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-6">
          {shopLocationData?.map((r: ShopDetail) => (
            <Link to={`shop/${r.code}`}>
              <div className="rounded-xl p-4 cursor-pointer hover:bg-blue-400 w-full h-36 shadow-lg">
                <div className="flex justify-between gap-1">
                  <div className="font-bold text-lg">{r.branch}</div>
                  <div className="rounded-lg w-1/3 text-center text-sm p-1 h-1/5 text-yellow-500 border border-yellow-500">
                    Pending{"("}
                    {r.province}
                    {")"}
                  </div>
                </div>
                <div className="flex mt-2 gap-2">
                  <div className="text-lg mt-1 text-gray-500">
                    <MdLocationPin />
                  </div>
                  <div className="text-sm text-gray-500">{r.address}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
