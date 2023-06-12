import { Spin } from "antd";

const SpinnerOverlay = (props: { isWrapper?: boolean }) => {
  return props?.isWrapper ? (
    <div className={"spinner--with-wrapper"}>
      <Spin size={"large"} />
    </div>
  ) : (
    <div className={"spinner"}>
      <Spin size={"large"} />
    </div>
  );
};

export default SpinnerOverlay;
