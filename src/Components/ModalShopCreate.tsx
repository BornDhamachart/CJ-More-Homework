import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

interface Props {
  isModalShopCreateVisible: boolean;
  setIsModalShopCreateVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelftId: string;
  isSubmitFinish: boolean;
  setIsSubmitFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalShopCreate: React.FC<Props> = ({
  isModalShopCreateVisible,
  setIsModalShopCreateVisible,
  chooseShelftId,
  isSubmitFinish,
  setIsSubmitFinish,
}) => {
  const fileList: UploadFile[] = [
    {
      uid: "1",
      name: "shelft1.jpeg",
      status: "done",
      url: "/public/shelft1.jpeg",
    },
    {
      uid: "2",
      name: "shelft2.jpeg",
      status: "done",
      url: "/public/shelft2.jpeg",
    },
  ];

  return (
    <Modal
      title="Upload shelft picture"
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
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture"
          defaultFileList={[...fileList]}
          onChange={(e) => console.log("e", e)}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>

        <div className="mt-10">
          <div className="w-full flex justify-end">
            <Button>Save</Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCreate;
