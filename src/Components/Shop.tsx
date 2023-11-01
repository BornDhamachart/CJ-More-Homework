import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopLocation from "../Data/ShopLocation.json";
import ShopLayout from "./ShopLayout";
import { CiLocationOn } from "react-icons/ci";
import Map from "./Map";
import { Image } from "antd";
import ModalShopCheck from "./ModalShopCheck";
import ModalShopCreate from "./ModalShopCreate";
import { ShelfData } from "../interface";

const Shop = () => {
  const params = useParams();
  const shopId = params.shopId;
  const [shopDetail, setShopDetail] = useState(
    shopLocation?.filter((r) => r.code === Number(shopId))[0]
  );
  const [isModalShopCheckVisible, setIsModalShopCheckVisible] = useState(false);
  const [isModalShopCreateVisible, setIsModalShopCreateVisible] =
    useState(false);
  const [chooseShelfId, setChooseShelfId] = useState("");
  const [isSubmitFinish, setIsSubmitFinish] = useState(false);

  // const initialShelfData: ShelfData[] = [
  //   {
  //     branch_code: Number(shopId),
  //     shelves: [
  //       {
  //         no: "1",
  //         status: "pending",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "test1",
  //       },
  //       {
  //         no: "2",
  //         status: "approved",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "",
  //       },
  //       {
  //         no: "3",
  //         status: "approved",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "test3",
  //       },
  //       {
  //         no: "4",
  //         status: "rejected",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "",
  //       },
  //       {
  //         no: "5",
  //         status: "",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "",
  //       },
  //       {
  //         no: "6",
  //         status: "",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "",
  //       },
  //       {
  //         no: "7",
  //         status: "",
  //         picture_name : "test111",
  //         picture_url: "/shelf1.jpeg",
  //         picture_upload_date: "01-11-2023 12:00:00",
  //         comment: "",
  //       },
  //     ],
  //   },
  // ];

  const initialShelfData: ShelfData[] = [
    {
      branch_code: Number(shopId),
      shelves: [
        {
          no: "1",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
        {
          no: "2",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
        {
          no: "3",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
        {
          no: "4",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
        {
          no: "5",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
        {
          no: "6",
          status: "",
          picture_name: "",
          picture_url: "",
          picture_upload_date: "",
          comment: "",
        },
      ],
    },
  ];

  const [shelfData, setShelfData] = useState<ShelfData[]>(initialShelfData);

  useEffect(() => {
    console.log("shelfData", shelfData);
  }, [shelfData]);

  return (
    <div className="m-6">
      <div className="w-full">
        <div className="font-bold text-xl">{shopDetail.branch}</div>
        <div className="flex mt-2 gap-2">
          <div className="text-lg mt-1">
            <CiLocationOn />
          </div>
          <div className="text-md">{shopDetail.address}</div>
        </div>
      </div>
      <div className="flex gap-10 justify-center">
        <div className="w-1/2 rounded-lg border border-gray-200 overflow-hidden my-8">
          <Map shopDetail={shopDetail} />
        </div>
        <div className="w-1/2 my-8">
          <Image
            width={"100%"}
            height={"100%"}
            src={"/shop.jpeg"}
            preview={false}
            className="rounded-lg border border-gray-200"
          />
        </div>
      </div>

      <ShopLayout
        shelfData={shelfData}
        isModalShopCheckVisible={isModalShopCheckVisible}
        setIsModalShopCheckVisible={setIsModalShopCheckVisible}
        isModalShopCreateVisible={isModalShopCreateVisible}
        setIsModalShopCreateVisible={setIsModalShopCreateVisible}
        setChooseShelfId={setChooseShelfId}
      />

      <ModalShopCheck
        shelfData={shelfData}
        setShelfData={setShelfData}
        isModalShopCheckVisible={isModalShopCheckVisible}
        setIsModalShopCheckVisible={setIsModalShopCheckVisible}
        chooseShelfId={chooseShelfId}
        setIsSubmitFinish={setIsSubmitFinish}
        isSubmitFinish={isSubmitFinish}
      />
      <ModalShopCreate
        shelfData={shelfData}
        setShelfData={setShelfData}
        isModalShopCreateVisible={isModalShopCreateVisible}
        setIsModalShopCreateVisible={setIsModalShopCreateVisible}
        chooseShelfId={chooseShelfId}
        setIsSubmitFinish={setIsSubmitFinish}
        isSubmitFinish={isSubmitFinish}
      />
    </div>
  );
};

export default Shop;
