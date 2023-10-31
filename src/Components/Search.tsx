import React from "react";
import { Button, Form, Input, Select } from "antd";
import provinceCode from "../Data/ProvinceCode.json";
import { FilterProps } from "../interface";

interface SearchComponentProps {
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const Search = ({ setFilters }: SearchComponentProps) => {
  const [form] = Form.useForm<FilterProps>();

  const searchInitialValue = {
    name: "",
    province: "",
  }

  //Form handling
  const onSubmitForm = (data: FilterProps) => {
    setFilters((prevState) => ({
      ...prevState,
      name: data.name,
      province: data.province,
    }));
    console.log("Search data", data);
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
    //   className="px-16 mt-6"
    >
      <div className="flex w-full gap-4">
        <Form.Item name="name" className="w-2/3" label="Shop name">
          <Input 
        //   placeholder="Shop name"
          >

          </Input>
        </Form.Item>
        <Form.Item name="province" className="w-1/3" label="Province">
          <Select
            allowClear
            showSearch
            // placeholder="Choose province"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            optionFilterProp="children"
            options={provinceCode?.map((r: any) => ({
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