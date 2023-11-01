import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { ShelfData } from "../interface";
import { useParams } from "react-router-dom";

interface Props {
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelfId: string;
  isSubmitFinish: boolean;
  setIsSubmitFinish: React.Dispatch<React.SetStateAction<boolean>>;
  shelfData: ShelfData[];
  setShelfData: React.Dispatch<React.SetStateAction<any>>;
}

const ModalShopCheck: React.FC<Props> = ({
  isModalShopCheckVisible,
  setIsModalShopCheckVisible,
  chooseShelfId,
  isSubmitFinish,
  setIsSubmitFinish,
  shelfData,
  setShelfData,
}) => {
  const { TextArea } = Input;
  const [inputComment, setInputComment] = useState("");

  const params = useParams();
  const shopId = params.shopId;

  const approve = () => {
    const updateShelf = shelfData[0]?.shelves?.map((shelf) => {
      if (shelf.no === chooseShelfId) {
        return { ...shelf, comment: inputComment, status: "approved" };
      }
      return shelf;
    });
    console.log("updateShelf", updateShelf);

    setShelfData((prevState: any) => {
      return prevState.map((r: any) => {
        if (r.branch_code === Number(shopId)) {
          return { ...r, shelves: updateShelf };
        }
        return r;
      });
    });
    setIsModalShopCheckVisible(false);
  };

  const reject = () => {
    const updateShelf = shelfData[0]?.shelves?.map((shelf) => {
      if (shelf.no === chooseShelfId) {
        return { ...shelf, comment: inputComment, status: "rejected" };
      }
      return shelf;
    });
    console.log("updateShelf", updateShelf);

    setShelfData((prevState: any) => {
      return prevState.map((r: any) => {
        if (r.branch_code === Number(shopId)) {
          return { ...r, shelves: updateShelf };
        }
        return r;
      });
    });
    setIsModalShopCheckVisible(false);
  };

  return (
    <Modal
      title="Check picture"
      open={isModalShopCheckVisible}
      width={700}
      onCancel={() => {
        setIsModalShopCheckVisible(false);
      }}
      footer={null}
      destroyOnClose
    >
      <>
        <div className="flex justify-center">
          <Image
            width={"75%"}
            height={"100%"}
            src={
              shelfData[0]?.shelves?.filter((r) => r.no === chooseShelfId)[0]
                ?.picture_url
            }
            preview={false}
          />
        </div>
        <div className="mt-1">
          Upload date :{" "}
          {
            shelfData[0]?.shelves?.filter((r) => r.no === chooseShelfId)[0]
              ?.picture_upload_date
          }
        </div>
        <div className="mt-6">
          <TextArea
            placeholder="Comment"
            autoSize={{ minRows: 3, maxRows: 6 }}
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center w-full gap-4 mt-6">
          <Button className="bg-green-400 w-1/2" onClick={() => approve()}>
            Approve
          </Button>
          <Button className="bg-red-400 w-1/2" onClick={() => reject()}>
            Reject
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCheck;
