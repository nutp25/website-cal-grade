import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  var grade = 'show-grade'
  const onFinish = (values) => {
    console.log('Success:', parseInt(values.number));
    let grade = parseInt(values.number)
    if (grade >=0 && grade <= 100) {
    if (grade <= 49) {
        grade = "f"
    
    } else if (grade <= 59) {
      grade = "d"
    
    } else if (grade <= 69) {
      grade = "c"
    
    } else if (grade <= 79) {
      grade = "b"
    
    } else if (grade >= 80) {
      grade ="a"
    } 
    console.log(typeof grade)
}
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Number"
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input the number!',
          },
        ]}
      >
        <Input />
      </Form.Item>
 {grade}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

function App() {
  return (
    <div className="App">
      <Demo></Demo>
     
    </div>
  );
}

export default App;
