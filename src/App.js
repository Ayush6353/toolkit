import "./App.css";
import { Button, Checkbox, Form, Input } from "antd";
import Home_data from "./components/Home_data";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function App() {
  return (
    <div>
    <Home_data/>
    </div>
  );
}

export default App;
