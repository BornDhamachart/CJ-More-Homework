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
  const matchedShelf = shelfData?.find((item : ShelfData) => item.branch_code === Number(shopId))?.shelves
  
  // useEffect(() => {
  //   console.log("matchedShelfLayout", matchedShelf);
  // }, [matchedShelf]);

  return (
    <>
      <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-3xl">
        <div className="border-x border-t border-white">
        <div className="border border-white justify-center items-center flex py-2">
          <div>Store</div>
        </div>
        <div className="flex justify-between w-full ">
          <div className="w-1/6 border border-white justify-center items-center flex">
            <div>Cashier</div>
          </div>
          <div className="my-10 mx-4 w-4/6 grid grid-cols-2 gap-8 ">
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
          <div className="flex flex-col items-center w-1/8">
            <div className="h-full m-4 p-2 border border-white justify-center items-center flex">
              <div>Beverage</div>
            </div>
            <div className="h-full m-4 p-2 border border-white justify-center items-center flex">
              <div>Beverage</div>
            </div>
          </div>
          <div className="border border-white justify-center items-center flex p-2">
          <div>Store</div>
        </div>
        
        </div>
        <div className=" justify-between items-center flex ">
          <div className="w-1/4 border border-white py-2 text-center">Wall</div>
          <div>IN/OUT</div>
          <div className="w-2/4 border border-white py-2 text-center">Wall</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
