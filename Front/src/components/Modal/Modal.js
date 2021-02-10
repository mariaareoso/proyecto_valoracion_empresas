import React, { useState } from 'react';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';
import './Modal.css';
//import './home/Navigation.css'

function PopUp(props) {
  const { children, title } = props;
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
      <Button className='PopUpButton' type="primary" onClick={showModal}>
        iniciar sesión
      </Button>
      <Modal
        visible={visible}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </>)
}

export default PopUp;



