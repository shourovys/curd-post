import { Button, Form, Input } from "antd";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/postsAction";
import FormItem from "../Common/Inputs/FormItem";
import ImgInput from "../Common/Inputs/ImgInput";

const { TextArea } = Input;

const PostForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({});

  const onFinish = (values) => {
    setLoading(true);
    dispatch(createPost({ ...values, ...inputValue }, setLoading, onClose));
  };
  const handelBlur = (input) => {
    setInputValue(input);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="card bg-light rounded-lg">
      <div className="card-body">
        <div className="">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">
                <strong>Create New Post</strong>
              </h2>
              <Form
                layout="vertical"
                initialValues={{
                  remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <ImgInput
                  priviesImage={inputValue.image}
                  handelBlur={handelBlur}
                />

                <FormItem name="title" label="Post Title" required={true} />

                <FormItem name="categories" label="Post Categories" />

                <FormItem name="disruption" label="Post disruption" rows={4} />

                <Form.Item>
                  <Button
                    loading={loading}
                    className="btn btn-outline-primary mb-1"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
