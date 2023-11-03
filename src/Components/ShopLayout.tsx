import React from "react";
import { Popover, Button } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import { Shelf, ShelfData } from "../interface";
import { useParams } from "react-router-dom";

interface Props {
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setChooseShelfId: React.Dispatch<React.SetStateAction<string>>;
  shelfData: ShelfData[];
}

const ShopLayout: React.FC<Props> = ({
  setIsModalShopCreateVisible,
  setIsModalShopCheckVisible,
  setChooseShelfId,
  shelfData,
}) => {
  const params = useParams();
  const shopId = params.shopId;
  const matchedShelf = shelfData?.find(
    (item: ShelfData) => item.branch_code === Number(shopId)
  )?.shelves;

  // useEffect(() => {
  //   console.log("matchedShelfLayout", matchedShelf);
  // }, [matchedShelf]);

  return (
    <div className="md:m-8 m-2">
      <div className="text-xl font-bold w-full text-center mb-4 text-gray-500">
        SHOP LAYOUT
      </div>
      <div className="md:p-8 p-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-3xl">
        <div className="md:border-x md:border-t border-white">
          <div className="border border-white justify-center items-center md:flex hidden py-2">
            <div>Store</div>
          </div>
          <div className="flex justify-between w-full ">
            <div className="w-1/6 border border-white justify-center items-center md:flex hidden">
              <div>Cashier</div>
            </div>
            <div className="md:my-10 my-4 mx-4 md:w-4/6 w-full grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2">
              {matchedShelf?.map((r: Shelf) => (
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
                    className={`border  flex justify-center items-center hover:bg-blue-200 rounded-md py-2 ${
                      r.status === "Pending"
                        ? "border-yellow-500"
                        : r.status === "Rejected"
                        ? "border-red-500"
                        : r.status === "Approved"
                        ? "border-green-500"
                        : "border-white"
                    }`}
                  >
                    <div className="border rounded-full w-6 text-center">
                      {r.no}
                    </div>
                  </div>
                </Popover>
              ))}
            </div>
            <div className="md:flex flex-col items-center w-1/8 hidden">
              <div className="h-full m-4 p-2 border border-white justify-center items-center flex">
                <div>Beverage</div>
              </div>
              <div className="h-full m-4 p-2 border border-white justify-center items-center flex">
                <div>Beverage</div>
              </div>
            </div>
            <div className="border border-white justify-center items-center md:flex hidden p-2">
              <div>Store</div>
            </div>
          </div>
          <div className="justify-between items-center md:flex hidden">
            <div className="w-1/4 border border-white py-2 text-center">
              Wall
            </div>
            <div>IN/OUT</div>
            <div className="w-2/4 border border-white py-2 text-center">
              Wall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
