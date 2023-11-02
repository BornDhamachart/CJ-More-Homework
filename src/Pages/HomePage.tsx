import { useEffect, useState } from "react";
import shopLocation from "../Data/shopLocation.json";
import { Link } from "react-router-dom";
import { ShopDetail } from "../interface";
import { MdLocationPin } from "react-icons/md";
import Search from "../Components/Search";
import { AiFillShop, AiOutlineArrowUp } from "react-icons/ai";

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
    <div className="m-6">
      <div className="font-bold text-4xl mb-4 flex gap-4 items-center">
        <div>Shops List</div>
        <AiFillShop />
      </div>
      <div className="flex gap-6 my-6">
        <div className="border border-gray-300 rounded-xl p-4 w-1/4">
          <div className="text-gray-400">Total branch</div>
          <div className="text-lg font-bold">{shopLocationData?.length}</div>
        </div>
        <div className="border border-gray-300 rounded-xl p-4 w-1/4">
          <div className="text-gray-400">Total pending</div>
          <div className="text-lg font-bold mb-3">654</div>
          <div className="flex items-center gap-1">
            <div className="text-blue-500 text-xl">
              <AiOutlineArrowUp />
            </div>
            <div>58 this week</div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl p-4 w-1/4">
          <div className="text-gray-400">Total done</div>
          <div className="text-lg font-bold mb-3">499</div>
          <div className="flex items-center gap-1">
            <div className="text-blue-500 text-xl">
              <AiOutlineArrowUp />
            </div>
            <div>28 this week</div>
          </div>
        </div>
      </div>
      <div>
        <Search setFilters={setFilters} />
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="w-full text-right px-4 pb-2">
          Totals : {shopLocationData?.length}
        </div>

        <div className="overflow-y-auto w-full h-screen grid grid-cols-3 gap-6">
          {shopLocationData?.map((r: ShopDetail) => (
            <Link to={`shop/${r.code}`}>
              <div className="rounded-xl p-4 cursor-pointer hover:bg-blue-400 h-full shadow-lg">
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
