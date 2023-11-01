import React from "react";
import { Popover, Button } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import { ShelfData } from "../interface";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseShelfId: React.Dispatch<React.SetStateAction<string>>;
  shelfData: ShelfData[];
}

const ShopLayout: React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  isModalShopCheckVisible,
  setIsModalShopCheckVisible,
  setChooseShelfId,
  shelfData,
}) => {
  return (
    <>
      <div className="border border-gray-400 rounded-lg pb-8">
        <div className="m-4 border border-black justify-center items-center flex py-2">
          <div>Store</div>
        </div>
        <div className="flex justify-between w-full ">
          <div className="w-1/6 m-4 border border-black justify-center items-center flex">
            <div>Cashier</div>
          </div>
          <div className="m-4 w-4/6 grid grid-cols-2 gap-8">
            {shelfData[0].shelves.map((r: any) => (
              <Popover
                content={
                  <>
                    <div>Status : {r.status === "" ? "-" : r.status}</div>
                    <div>Please select options</div>
                    <div className="flex justify-center w-full gap-4 mt-2">
                      <Button
                        onClick={() => {
                          setIsModalShopCreateVisible(true);
                          setChooseShelfId(r.no);
                        }}
                      >
                        <div className="flex gap-1 items-center h-full">
                          {r.status === "" ? (
                            <span>Add</span>
                          ) : (
                            <span>Edit</span>
                          )}
                          <span className="text-lg">
                            <AiOutlinePicture />
                          </span>
                        </div>
                      </Button>
                      <Button
                        onClick={() => {
                          setIsModalShopCheckVisible(true);
                          setChooseShelfId(r.no);
                        }}
                        disabled={r.status === ""}
                      >
                        <div className="flex gap-1 items-center h-full">
                          <span>Check</span>
                          <span className="text-lg">
                            <AiOutlinePicture />
                          </span>
                        </div>
                      </Button>
                    </div>
                  </>
                }
                title={`SHELF NO. ${r.no}`}
                trigger="hover"
              >
                <div
                  className={`border border-black flex justify-center items-center hover:bg-gray-200 rounded-md py-2 ${
                    r.status === "pending"
                      ? "border-yellow-400"
                      : r.status === "rejected"
                      ? "border-red-400"
                      : r.status === "approved"
                      ? "border-green-400"
                      : ""
                  }`}
                >
                  <div className="border border-black rounded-full w-6 text-center">
                    {r.no}
                  </div>
                </div>
              </Popover>
            ))}
          </div>
          <div className="flex flex-col items-center w-1/8">
            <div className="h-full m-4 p-2 border border-black justify-center items-center flex">
              <div>Beverage</div>
            </div>
            <div className="h-full m-4 p-2 border border-black justify-center items-center flex">
              <div>Beverage</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
