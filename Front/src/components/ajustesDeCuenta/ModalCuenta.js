import React, { useState } from "react";
import Modal from "antd/lib/modal";
import "antd/dist/antd.css";
import ResetPassword from "./resetPassword";
import { Button } from "antd";

function PopCuenta(props) {
  const { title } = props;
  const [setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>ENVIAR</Button>
      <Modal
        visible={visible}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ResetPassword></ResetPassword>
      </Modal>
    </>
  );
}

export default PopCuenta;
