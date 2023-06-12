import { Spin } from "antd";
import React from "react";

export default function Loader(props: any) {
  return (
    <div className="loader" {...props}>
      <Spin size="large" />
    </div>
  );
}
