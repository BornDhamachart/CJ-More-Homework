import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopLocation from "../Data/shopLocation.json";
import ShopLayout from "../Components/ShopLayout";
import { MdLocationPin } from "react-icons/md";
import Map from "../Components/Map";
import { Image } from "antd";
import ModalShopCheck from "../Components/ModalShopCheck";
import ModalShopCreate from "../Components/ModalShopCreate";
import { ShelfData, ShopDetail } from "../interface";

const Shop: React.FC = () => {
  const params = useParams();
  const shopId = params.shopId;
  const [isModalShopCheckVisible, setIsModalShopCheckVisible] = useState(false);
  const [isModalShopCreateVisible, setIsModalShopCreateVisible] =
    useState(false);
  const [chooseShelfId, setChooseShelfId] = useState("");
  const [isSubmitFinished, setIsSubmitFinished] = useState(false);
  const [shelfData, setShelfData] = useState<ShelfData[]>([]);
  const shopDetail = shopLocation?.filter(
    (r: ShopDetail) => r.code === Number(shopId)
  )[0];
  const newShelfData: ShelfData = {
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
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("saveData");

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      const findData = parsedData.find(
        (item: ShelfData) => item.branch_code === newShelfData.branch_code
      );

      if (findData) {
        setShelfData(parsedData);
      } else {
        setShelfData([...parsedData, newShelfData]);
      }
    } else {
      setShelfData([newShelfData]);
    }
  }, []);

  // useEffect(() => {
  //   console.log("shelfData", shelfData);
  // }, [shelfData]);

  useEffect(() => {
    if (isSubmitFinished) {
      // console.log("shelfDataForSubmit", shelfData);
      localStorage.setItem("saveData", JSON.stringify(shelfData));
      setIsSubmitFinished(false);
    }
  }, [isSubmitFinished]);

  return (
    <>
      <div className="flex bg-gray-100 gap-6">
        <div className="w-1/2 flex flex-col gap-4 py-8">
          <div className="w-full text-center rounded-xl bg-white mx-8 py-4">
            <div className="font-bold text-2xl">{shopDetail.branch}</div>
            <div className="flex mt-2 gap-1 justify-center px-10">
              <div className="text-xl mt-1 text-gray-500">
                <MdLocationPin />
              </div>
              <div className="text-md">{shopDetail.address}</div>
            </div>
          </div>
          <div className="overflow-hidden mx-8  w-full h-4/5 rounded-xl border border-gray-200">
            <Map shopDetail={shopDetail} />
          </div>
        </div>
        <div className="w-1/2 m-8">
          <Image
            width={"100%"}
            height={"100%"}
            src={"/shopPic.webp"}
            preview={false}
            className="border-gray-200 rounded-xl"
          />
        </div>
      </div>

      <div className="m-8">
        <div className="text-2xl font-bold w-full text-center mb-4 text-gray-500">
          SHOP LAYOUT
        </div>
        <ShopLayout
          shelfData={shelfData}
          setIsModalShopCheckVisible={setIsModalShopCheckVisible}
          setIsModalShopCreateVisible={setIsModalShopCreateVisible}
          setChooseShelfId={setChooseShelfId}
        />
      </div>
      <ModalShopCheck
        shelfData={shelfData}
        setShelfData={setShelfData}
        isModalShopCheckVisible={isModalShopCheckVisible}
        setIsModalShopCheckVisible={setIsModalShopCheckVisible}
        chooseShelfId={chooseShelfId}
        setIsSubmitFinished={setIsSubmitFinished}
      />
      <ModalShopCreate
        shelfData={shelfData}
        setShelfData={setShelfData}
        isModalShopCreateVisible={isModalShopCreateVisible}
        setIsModalShopCreateVisible={setIsModalShopCreateVisible}
        chooseShelfId={chooseShelfId}
        setIsSubmitFinished={setIsSubmitFinished}
      />
    </>
  );
};

export default Shop;
