import React, { useState } from "react";
import { useParams } from "react-router-dom";
import shopLocation from "../Data/ShopLocation.json";
import ShopLayout from "./ShopLayout";
import { CiLocationOn } from "react-icons/ci";
import Map from "./Map";
import { Button, Form, Input, Table } from "antd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { ColumnsType } from "antd/lib/table";
import ModalShopCheck from "./ModalShopCheck";
import ModalShopCreate from "./ModalShopCreate";

const Shop = () => {
  const params = useParams();
  const shopId = params.shopId;
  const [shopDetail, setShopDetail] = useState(
    shopLocation?.filter((r) => r.code === Number(shopId))[0]
  );
  const [shopOpen, setShopOpen] = useState(false);
  const [isModalShopCheckVisible, setIsModalShopCheckVisible] = useState(false);
  const [isModalShopCreateVisible, setIsModalShopCreateVisible] =
    useState(false);
  const [chooseShelftId, setChooseShelftId] = useState("");
  const [isSubmitFinish, setIsSubmitFinish] = useState(false);

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

  const columns: ColumnsType<any> = [
    {
      title: "Date",
      align: "left",
      dataIndex: ["date"],
      sorter: (a, b) => a.date - b.date,
      render: (_, record) => {
        return <div>{record?.date}</div>;
      },
    },
    {
      title: "Status",
      align: "center",
      dataIndex: ["status"],
      render: (_, record) => {
        return <div>{record?.status}</div>;
      },
    },
    {
      title: "Manage",
      align: "center",
      dataIndex: [],
      render: (_, record) => {
        return (
          <div
            className="cursor-pointer text-xl flex justify-center"
            onClick={() => {
              // setModalMode("edit");
              // setChooseFunctionId(record?.run_no);
              setShopOpen(true);
            }}
          >
            <AiOutlineEdit />
          </div>
        );
      },
    },
  ];

  return (
    <div className="m-6">
      <div className="flex gap-10">
        <div className="w-1/2">
          <div className="font-bold text-xl">{shopDetail.branch}</div>
          <div className="flex mt-2 gap-2">
            <div className="text-lg mt-1">
              <CiLocationOn />
            </div>
            <div className="text-md">{shopDetail.address}</div>
          </div>
        </div>
        <Map shopDetail={shopDetail} />
      </div>
      <div className="flex gap-6">
        <div className="tw-mt-2 w-1/2">
          <Table
            rowKey={"date"}
            columns={columns}
            dataSource={data}
            // scroll={{ x: 400 }}
          />
        </div>
        {shopOpen && (
          <ShopLayout
            isModalShopCheckVisible={isModalShopCheckVisible}
            setIsModalShopCheckVisible={setIsModalShopCheckVisible}
            isModalShopCreateVisible={isModalShopCreateVisible}
            setIsModalShopCreateVisible={setIsModalShopCreateVisible}
          />
        )}
        <ModalShopCheck
          isModalShopCheckVisible={isModalShopCheckVisible}
          setIsModalShopCheckVisible={setIsModalShopCheckVisible}
          chooseShelftId={chooseShelftId}
          setIsSubmitFinish={setIsSubmitFinish}
          isSubmitFinish={isSubmitFinish}
        />
        <ModalShopCreate
          isModalShopCreateVisible={isModalShopCreateVisible}
          setIsModalShopCreateVisible={setIsModalShopCreateVisible}
          chooseShelftId={chooseShelftId}
          setIsSubmitFinish={setIsSubmitFinish}
          isSubmitFinish={isSubmitFinish}
        />
      </div>
    </div>
  );
};

export default Shop;
