import React, { useState } from "react";
import { Space, Table, Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { adddata, removedata, updatedata } from "../store/SliceData";
const { Column } = Table;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Home_data = () => {
  const [form] = Form.useForm();
  const [allfachData, setAllfachData] = useState("");
  const [Editbtn, setEditbtn] = useState(true);
  const [eid, setEid] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((start) => {
    return start.users;
  });

  const deletedata = (record) => {
    dispatch(removedata(record));
  };

  const Editdata = (record) => {
    form.setFieldsValue({ email: record.email, password: record.password });
    setEid(record.id)
    setEditbtn(false);
  };

  console.log(data, "usersdata");
  const FormSubmit = (values) => {

    const NewfachData = { id: allfachData.length + 1 };

    if (!Editbtn) {
      dispatch(
        updatedata({
          id: eid,
          email: values.email,
          password: values.password,
        })
      );
      console.log(({
        id: eid,
        email: values.email,
        password: values.password,
      }),"uuuuuuuuuuuuuuuuuuuuuuu")
      setEditbtn(true);
      form.resetFields();
    } else if (Editbtn) {
      setAllfachData([...allfachData, NewfachData]);
      dispatch(
        adddata({
          id: allfachData.length + 1 ,
          email: values.email,
          password: values.password,
        })
      );
      form.resetFields();
    }
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

            <Form.Item>
              {Editbtn ? (
                <Button
                  id="login-btn"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              ) : (
                <Button
                  id="login-btn"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Edit
                </Button>
              )}
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
                    <Button onClick={() => Editdata(record)}>Edit</Button>
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
