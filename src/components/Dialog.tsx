import React from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function Dialog({ title = "", visible, onCancel, children, reset = false, className = "" }: Props) {
  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      wrapClassName={className}
      destroyOnClose={reset}
      closeIcon={<CloseOutlined />}
    >
      {children}
    </Modal>
  );
}

interface Props {
  title?: any;
  visible: boolean;
  onCancel?: () => void;
  children: any;
  className?: string;
  reset?: boolean;
}
