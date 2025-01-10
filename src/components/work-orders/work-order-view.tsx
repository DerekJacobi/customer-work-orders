import React, { useState } from "react";
import { Button, Modal } from "antd";
import SampleWorkOrder from "./sample-work-order.tsx";

const WorkOrderView: React.FC = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Update
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Print
          </Button>,
        ]}
      >
        <SampleWorkOrder />
      </Modal>
    </>
  );
};

export default WorkOrderView;
