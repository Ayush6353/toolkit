import React, { useState } from "react";
import { Space, Table, Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { adddata, removedata } from "../store/SliceData";
const { Column } = Table;


const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Home_data = () => {
  const [form] = Form.useForm();
  const [allfachData, setAllfachData] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((start) => {
    return start.users;
  });

  const deletedata = (record) => {
    dispatch(removedata(record));
  };

  console.log(data, "usersdata");
  const FormSubmit = (values) => {
    console.log(values, "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
    const NewfachData = { id: allfachData.length + 1 };

    setAllfachData([...allfachData, NewfachData]);
    dispatch(
      adddata({
        id: allfachData.length + 1,
        email: values.email,
        password: values.password,
      })
    );
    form.resetFields();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={FormSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
            // onClick={FormSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="antd_main">
          <div className="antd">
            <Table dataSource={data}>
              <Column title="ID" dataIndex="id" key="id " />
              <Column title="EMAIL" dataIndex="email" key="email" />
              <Column title="PASSWORD" dataIndex="password" key="password" />
              <Column
                title="ACTION"
                key="action"
                render={(record) => (
                  <Space size="middle">
                    <Button>Edit</Button>
                    <Button onClick={() => deletedata(record)}>Delete</Button>
                  </Space>
                )}
              />
            </Table>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home_data;
