import { Button, Drawer } from "antd";
import React, { useState } from "react";
import PostForm from "../../PostForm/PostForm";

const RightDrawer = ({content}) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        {content}
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        width= '70%'
      >
        <PostForm  onClose={onClose}/>
      </Drawer>
    </>
  );
};

export default RightDrawer
