import React from "react";
import { ShopDetail } from "../interface";
import { AiOutlineArrowUp } from "react-icons/ai";

interface Props {
  shopLocationData: ShopDetail[];
}

const StatusCard: React.FC<Props> = ({ shopLocationData }) => {
  return (
    <div className="flex flex-wrap md:gap-6 md:my-6 my-2 gap-1">
      <div className="border border-gray-300 rounded-xl p-4 md:w-1/4 hidden md:block">
        <div className="text-gray-400">Total branch</div>
        <div className="text-lg font-bold">{shopLocationData?.length}</div>
      </div>
      <div className="border border-gray-300 rounded-xl p-4 md:w-1/4 w-full">
        <div className="text-gray-400">Total pending</div>
        <div className="text-lg font-bold mb-3">654</div>
        <div className="flex items-center gap-1">
          <div className="text-blue-500 text-xl">
            <AiOutlineArrowUp />
          </div>
          <div>58 this week</div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-xl p-4 md:w-1/4 w-full">
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
  );
};

export default StatusCard;
