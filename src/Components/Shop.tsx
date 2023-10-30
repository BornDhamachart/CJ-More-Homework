import React, { useState } from "react";
import { useParams } from "react-router-dom";
import shopLocation from "../Data/ShopLocation.json";
import ShopLayout from "./ShopLayout";

const Shop = () => {
  const params = useParams();
  const shopId = params.shopId;
  const [shopDetail, setShopDetail] = useState(
    shopLocation?.filter((r) => r.code === Number(shopId))[0]
  );

  interface DataType {
    date: string;
    status: string;
  }

  const data: DataType[] = [
    {
      date: "01-10-2023",
      status: "Waiting confirmation",
    },
    {
      date: "02-10-2023",
      status: "Waiting confirmation",
    },
    {
      date: "03-10-2023",
      status: "Done",
    },
    {
      date: "04-10-2023",
      status: "Done",
    },
    {
      date: "05-10-2023",
      status: "Waiting confirmation",
    },
    {
      date: "06-10-2023",
      status: "Done",
    },
    {
      date: "07-10-2023",
      status: "No picture upload",
    },
  ];
  console.log("shopDetail", shopDetail);

  return (
    <div>
      <div>{shopId}</div>
      <div>{shopDetail.branch}</div>
      <div>{shopDetail.address}</div>
      <ShopLayout />
    </div>
  );
};

export default Shop;
