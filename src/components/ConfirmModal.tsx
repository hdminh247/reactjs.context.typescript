import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export function ConfirmationDialog({ title, message, type = "warning", onConfirm, onCancel = () => {} }: Props) {
  Modal.confirm({
    title: title,
    icon: <ExclamationCircleOutlined />,
    content: message,
    okText: "Yes",
    cancelText: "No",
    type,
    onOk: onConfirm,
    onCancel: onCancel,
    centered: true,
  });
}

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  type?: any;
}
