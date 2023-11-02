import React, { useState } from "react";
import { Button, Modal, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { Shelf, ShelfData } from "../interface";
import moment from "moment";
import { useParams } from "react-router-dom";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelfId: string;
  shelfData: ShelfData[];
  setShelfData: React.Dispatch<React.SetStateAction<any>>;
  setIsSubmitFinished: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalShopCreate: React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  chooseShelfId,
  shelfData,
  setShelfData,
  setIsSubmitFinished
}) => {
  const [inputPicture, setInputPicture] = useState<any>();
  const params = useParams();
  const shopId = params.shopId;
  const matchedShelf = shelfData?.find((item : ShelfData) => item.branch_code === Number(shopId))?.shelves

  let fileList : UploadFile[] = [];

  if (
    !!(matchedShelf?.filter((r:Shelf) => r.no === chooseShelfId)[0]?.picture_url) && !!(matchedShelf?.filter((r:any) => r.no === chooseShelfId)[0]?.picture_name)
  ) {
    fileList = [
      {
        uid: "1",
        name: matchedShelf?.filter((r:Shelf) => r.no === chooseShelfId)[0]?.picture_name,
        status: "done",
        url: matchedShelf?.filter((r:Shelf) => r.no === chooseShelfId)[0]?.picture_url,
      },
    ];
  }

  const addPicture = (picture: string, name: string) => {
    const updateShelf = matchedShelf?.map((shelf : Shelf) => {
      console.log("shelf.no", shelf.no);
      console.log("chooseShelfId", chooseShelfId);

      if (shelf.no === chooseShelfId) {
        return {
          ...shelf,
          status: "Pending",
          picture_name: name,
          picture_url: picture,
          picture_upload_date: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
        };
      }
      return shelf;
    });
    console.log("updateShelf", updateShelf);

    setShelfData((prevState: ShelfData[]) => {
      return prevState.map((r: ShelfData) => {
        if (r.branch_code === Number(shopId)) {
          return { ...r, shelves: updateShelf };
        }
        return r;
      });
    });
    setIsModalShopCreateVisible(false);
    setIsSubmitFinished(true)
  };

  const handleUploadPicture = () => {
    const file = inputPicture.file;
    if (file) {
      if (file.size < 1 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = function (e: any) {
        addPicture(e.target.result, file.name);
      };
      reader.readAsDataURL(file);
    } else {
      message.error("Image must smaller than 1 MB!!!")
    }
  }
  };

  return (
    <Modal
      title="Upload shelf picture"
      open={isModalShopCreateVisible}
      width={800}
      onCancel={() => {
        setIsModalShopCreateVisible(false);
      }}
      footer={null}
      destroyOnClose
    >
      <>
        <Upload
          listType="picture"
          defaultFileList={[...fileList]}
          maxCount={1}
          beforeUpload={() => false}
          onChange={(e) => {
            setInputPicture(e);
          }}
        >
          <Button icon={<UploadOutlined />}>Upload picture</Button>
        </Upload>

        <div className="mt-10">
          <div className="w-full flex justify-end">
            <Button onClick={() => handleUploadPicture()}>Save</Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCreate;
