import React, { useState } from "react";
import { Popover, Button } from "antd";
import { AiOutlinePicture } from "react-icons/ai";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopLayout: React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  isModalShopCheckVisible,
  setIsModalShopCheckVisible,
}) => {
  const shelft = [];
  for (let i = 1; i <= 10; i++) {
    shelft.push(i);
  }
  const [popOpen, setPopOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="m-16 border border-gray-400 h-96 w-2/3 grid grid-cols-5 gap-8 p-8 ">
          {shelft.map((r) => (
            <Popover
              content={
                <>
                  <div>Please select options</div>
                  <div className="flex justify-center w-full gap-4 mt-2">
                    <Button
                      onClick={() => {
                        setIsModalShopCreateVisible(true);
                        setPopOpen(false);
                      }}
                    >
                      <div className="flex gap-1 items-center h-full">
                        <span>Add</span>
                        <span className="text-lg">
                          <AiOutlinePicture />
                        </span>
                      </div>
                    </Button>
                    <Button
                      onClick={() => {
                        setIsModalShopCheckVisible(true);
                        setPopOpen(false);
                      }}
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
              // open={popOpen}
              title={`SHELFT NO. ${r}`}
              trigger="hover"
              // onOpenChange={() => setPopOpen(true)}
            >
              <div className="border border-black flex justify-center items-center cursor-pointer hover:border-green-400">
                <div className="border border-black rounded-full w-6 text-center">
                  {r}
                </div>
              </div>
            </Popover>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
