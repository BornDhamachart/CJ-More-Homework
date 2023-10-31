import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";

interface Props {
  isModalShopCheckVisible: boolean;
  setIsModalShopCheckVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chooseShelftId: string;
  isSubmitFinish: boolean;
  setIsSubmitFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalShopCheck: React.FC<Props> = ({
  isModalShopCheckVisible,
  setIsModalShopCheckVisible,
  chooseShelftId,
  isSubmitFinish,
  setIsSubmitFinish,
}) => {
  const imageUrl = [
    { url: "/public/shelft1.jpeg" },
    { url: "/public/shelft2.jpeg" },
    { url: "/public/shelft3.jpeg" },
  ];
  const { TextArea } = Input;

  return (
    <Modal
      title="Check picture"
      open={isModalShopCheckVisible}
      width={800}
      onCancel={() => {
        setIsModalShopCheckVisible(false);
      }}
      footer={null}
      destroyOnClose
    >
      <>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-96">
          {imageUrl.map((r) => (
            <Image width={"100%"} height={160} src={r.url} />
          ))}
        </div>

        <div className="mt-6">
          <TextArea
            placeholder="Comment"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </div>
        <div className="flex justify-center w-full gap-4 mt-6">
          <Button className="bg-green-400 w-1/2">Approve</Button>
          <Button className="bg-red-400 w-1/2">Reject</Button>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCheck;
