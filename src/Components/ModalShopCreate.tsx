import React, { useEffect, useState } from "react";
import { Button, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { ShelfData } from "../interface";
import moment from "moment";
import { useParams } from "react-router-dom";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelfId: string;
  isSubmitFinish: boolean;
  setIsSubmitFinish: React.Dispatch<React.SetStateAction<boolean>>;
  shelfData: ShelfData[];
  setShelfData: React.Dispatch<React.SetStateAction<any>>;
}

const ModalShopCreate: React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  chooseShelfId,
  shelfData,
  setShelfData,
}) => {
  const [inputPicture, setInputPicture] = useState<any>();

  const params = useParams();
  const shopId = params.shopId;

  let fileList: UploadFile[] = [];

  if (
    shelfData[0]?.shelves?.filter((r) => r.no === chooseShelfId)[0]
      ?.picture_url !== ""
  ) {
    fileList = [
      {
        uid: "1",
        name: shelfData[0]?.shelves?.filter((r) => r.no === chooseShelfId)[0]
          ?.picture_name,
        status: "done",
        url: shelfData[0]?.shelves?.filter((r) => r.no === chooseShelfId)[0]
          ?.picture_url,
      },
    ];
  }

  const addPicture = (picture: string, name: string) => {
    const updateShelf = shelfData[0]?.shelves?.map((shelf) => {
      console.log("shelf.no", shelf.no);
      console.log("chooseShelfId", chooseShelfId);

      if (shelf.no === chooseShelfId) {
        return {
          ...shelf,
          status: "pending",
          picture_name: name,
          picture_url: picture,
          picture_upload_date: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
        };
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
    setIsModalShopCreateVisible(false);
  };

  const handleUploadPicture = () => {
    const file = inputPicture.file;

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: any) {
        addPicture(e.target.result, file.name);
      };
      reader.readAsDataURL(file);
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
