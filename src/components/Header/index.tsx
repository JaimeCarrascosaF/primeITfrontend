import React from "react";
import { Header } from "antd/es/layout/layout";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";

const HeaderContent = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clickAction = () => {
    setModalOpen(true);
  };
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <FloatButton
        className="floatButton"
        icon={<PlusOutlined />}
        description="Add"
        onClick={clickAction}
      />
    </Header>
  );
};

export default HeaderContent;
