import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload } from "antd";
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
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture"
          defaultFileList={[...fileList]}
          onChange={(e) => console.log("e", e)}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>

        <div className="mt-10">
          <Form
            // form={form}
            preserve={false}
            // onFinish={onSubmitForm}
            autoComplete="off"
            scrollToFirstError={true}
          >
            <Form.Item label="Comment" name="comment">
              <Input />
            </Form.Item>

            <div className="tw-flex tw-justify-center tw-w-full tw-gap-4 tw-pt-6">
                <Button
                >
                  Approve
                </Button>
                <Button>
                  Reject
                </Button>
            </div>
          </Form>
        </div>
      </>
    </Modal>
  );
};

export default ModalShopCheck;
