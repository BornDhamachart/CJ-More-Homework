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
      title="test"
      open={isModalShopCheckVisible}
      width={800}
      onCancel={() => {
        setIsModalShopCheckVisible(false);
      }}
      footer={null}
      destroyOnClose
    >
      <>
   
          
          <Image width={"100%"} height={400} src="/public/shelft1.jpeg" />
          
      
        <div>
      <TextArea
        placeholder="Comment"
        autoSize={{ minRows: 3, maxRows: 6 }}
      />
        </div>
        <div className="tw-flex tw-justify-center tw-w-full tw-gap-4 tw-pt-6">
                <Button
                >
                  Approve
                </Button>
                <Button>
                  Reject
                </Button>
            </div>
      </>
    </Modal>
  );
};

export default ModalShopCheck;
