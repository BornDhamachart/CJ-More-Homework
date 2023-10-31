import { useEffect, useState } from "react";
import shopLocation from "../Data/ShopLocation.json";
import provinceCode from "../Data/ProvinceCode.json";
import { Link } from "react-router-dom";
import Map from "../Components/Map";
import { ShopDetail } from "../interface";
import { CiLocationOn, CiLogin } from "react-icons/ci";
import Search from "../Components/Search";

const HomePage = () => {
  // console.log("process.env.GOOGLE_MAP_API_KEY",process.env.GOOGLE_MAP_API_KEY)

  const [shopLocationData, setShopLocationData] =
    useState<ShopDetail[]>(shopLocation);
  const [shopLocationOriData, setShopLocationOriData] =
    useState<ShopDetail[]>(shopLocation);
  const [filters, setFilters] = useState({
    name: "",
    province: "",
  });

  useEffect(() => {
    console.log("filters", filters);
    if (filters.province !== "" && filters.name !== "") {
      setShopLocationData(
        shopLocationOriData.filter(
          (r) =>
            r.province === Number(filters.province) &&
            r.branch.includes(filters.name)
        )
      );
    } else if (filters.province !== "" && filters.name === "") {
      setShopLocationData(
        shopLocationOriData.filter(
          (r) => r.province === Number(filters.province)
        )
      );
    } else if (filters.province === "" && filters.name !== "") {
      setShopLocationData(
        shopLocationOriData.filter((r) => r.branch.includes(filters.name))
      );
    } else {
      setShopLocationData(shopLocationOriData);
    }
  }, [filters]);

  return (
    <div className="m-6">
      <div className="font-bold text-4xl mb-6 text-green-400">
        Shop location
      </div>

      <div>
        <Search setFilters={setFilters} />
      </div>
      <div className="w-full text-right p-4">
        Totals : {shopLocationData?.length}
      </div>

      <div className="overflow-y-auto w-full h-screen grid grid-cols-3 gap-6">
        {shopLocationData?.map((r: ShopDetail) => (
          <Link to={`shop/${r.code}`}>
            <div className="rounded-xl p-4 cursor-pointer bg-gray-100 hover:bg-green-400 h-full">
              <div className="flex justify-between">
                
                  <div className="font-bold text-lg">{r.branch}</div>
                  <div className="rounded-xl bg-white w-1/3 text-center text-sm p-1 h-1/5 text-blue-600">
                    Pending{"("}
                    {r.province}
                    {")"}
                  </div>
                
              </div>
              <div className="flex mt-2 gap-2">
                <div className="text-lg mt-1">
                  <CiLocationOn />
                </div>
                <div className="text-sm">{r.address}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
