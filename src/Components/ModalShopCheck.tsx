import React, { useState } from "react";
import { Button, Input, Modal, Image } from "antd";
import { ShelfData } from "../interface";
import { useParams } from "react-router-dom";

interface Props {
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelfId: string;
  shelfData: ShelfData[];
  setShelfData: React.Dispatch<React.SetStateAction<any>>;
  setIsSubmitFinished: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalShopCheck: React.FC<Props> = ({
  isModalShopCheckVisible,
  setIsModalShopCheckVisible,
  chooseShelfId,
  shelfData,
  setShelfData,
  setIsSubmitFinished
}) => {
  const { TextArea } = Input;
  const [inputComment, setInputComment] = useState("");
  const params = useParams();
  const shopId = params.shopId;
  const matchedShelf = shelfData?.find((item : ShelfData) => item.branch_code === Number(shopId))?.shelves

  const approve = () => {
    const updateShelf = matchedShelf?.map((shelf) => {
      if (shelf.no === chooseShelfId) {
        return { ...shelf, comment: inputComment, status: "Approved" };
      }
      return shelf;
    });
    // console.log("updateShelf", updateShelf);

    setShelfData((prevState: ShelfData[]) => {
      return prevState.map((r: ShelfData) => {
        if (r.branch_code === Number(shopId)) {
          return { ...r, shelves: updateShelf };
        }
        return r;
      });
    });
    setIsModalShopCheckVisible(false);
    setIsSubmitFinished(true);
  };

  const reject = () => {
    const updateShelf = matchedShelf?.map((shelf) => {
      if (shelf.no === chooseShelfId) {
        return { ...shelf, comment: inputComment, status: "Rejected" };
      }
      return shelf;
    });
    // console.log("updateShelf", updateShelf);

    setShelfData((prevState: ShelfData[]) => {
      return prevState.map((r: ShelfData) => {
        if (r.branch_code === Number(shopId)) {
          return { ...r, shelves: updateShelf };
        }
        return r;
      });
    });
    setIsModalShopCheckVisible(false);
    setIsSubmitFinished(true);
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
            width={"400px"}
            height={"300px"}
            src={
              matchedShelf?.filter((r) => r.no === chooseShelfId)[0]
                ?.picture_url
            }
            preview={false}
          />
          </div>
        <div className="mt-1 w-full text-center text-gray-400">
          Upload date :{" "}
          {
            matchedShelf?.filter((r) => r.no === chooseShelfId)[0]
              ?.picture_upload_date
          }
        </div>
        <div className="mt-6">
          <TextArea
            placeholder="Comment"
            autoSize={{ minRows: 3, maxRows: 6 }}
            defaultValue={ matchedShelf?.filter((r) => r.no === chooseShelfId)[0]
              ?.comment}
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center w-full gap-4 mt-6">
        <Button className="border border-gray-400  hover:bg-red-200 w-1/2 hover:!border-red-300" onClick={() => reject()}>
            Reject
          </Button>
          <Button className="border border-green-500 text-green-500 hover:bg-green-200 w-1/2 hover:!border-green-500" onClick={() => approve()}>
            Approve
          </Button>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCheck;
