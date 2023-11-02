import React from "react";
import { Button, Form, Input, Select } from "antd";
import provinceCode from "../Data/ProvinceCode.json";
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
  }

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
      <div className="flex w-full gap-4">
        <div className="text-2xl pt-1">
        <BiSearchAlt />
        </div>
        <Form.Item name="name" className="w-2/3" label="Shop name">
          <Input 
          >

          </Input>
        </Form.Item>
        <Form.Item name="province" className="w-1/3" label="Province">
          <Select
            allowClear
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            optionFilterProp="children"
            options={provinceCode?.map((r: Province) => ({
              value: r.id,
              label: r.name_th,
            }))}
          ></Select>
      </Form.Item>

      
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
            // type="primary"
            htmlType="submit"
            className="bg-black text-white rounded-full"
          >
            Search
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Search;