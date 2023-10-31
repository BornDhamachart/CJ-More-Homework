import React from "react";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopLayout : React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  isModalShopCheckVisible,
  setIsModalShopCheckVisible
}) => {
  const shelft = [];
  for (let i = 1; i <= 10; i++) {
    shelft.push(i);
  }


  return (
    <>
      <div className="flex justify-center">
        <div className="m-16 border border-gray-400 h-96 w-2/3 grid grid-cols-5 gap-8 p-8 ">
          {shelft.map((r) => (
            <div 
            className="border border-black flex justify-center items-center cursor-pointer hover:border-green-400"
            onClick = {() => setIsModalShopCheckVisible(true)}
            >
              <div className="border border-black rounded-full w-6 text-center">
                {r}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
