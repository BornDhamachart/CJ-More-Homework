import React from "react";
import { Button, Form, Input, Select } from "antd";
import provinceCode from "../Data/provinceCode.json";
import { FilterProps, Province } from "../interface";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const Search: React.FC<Props> = ({ setFilters }) => {
  const [form] = Form.useForm<FilterProps>();

  const searchInitialValue = {
    name: "",
    province: "",
  };

  const onSubmitForm = (data: FilterProps) => {
    setFilters((prevState) => ({
      ...prevState,
      name: data.name,
      province: data.province,
    }));
  };

  const onReset = () => {
    form.setFieldsValue(searchInitialValue);
    setFilters(searchInitialValue);
  };

  return (
    <Form
      form={form}
      preserve={false}
      onFinish={onSubmitForm}
      initialValues={searchInitialValue}
      autoComplete="off"
    >
      <div className="md:flex w-full md:gap-4">
        <div className="text-2xl pt-1 hidden md:block">
          <BiSearchAlt />
        </div>
        <Form.Item
          name="name"
          className="md:w-2/3 w-full mb-0"
          label="Shop name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="province"
          className="md:w-1/3 w-full mb-2"
          label="Province"
        >
          <Select
            allowClear
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            optionFilterProp="children"
            options={provinceCode?.map((r: Province) => ({
              value: r.id,
              label: r.name_th,
            }))}
          ></Select>
        </Form.Item>

        <div className="flex gap-1 justify-end">
          <Form.Item>
            <Button
              htmlType="button"
              onClick={onReset}
              className="bg-white text-black rounded-full"
            >
              Reset
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-black text-white rounded-full"
            >
              Search
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default Search;
