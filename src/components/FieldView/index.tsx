import React, { useState } from "react";
import { Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { changeFieldData, handleCancel, handleOk } from "./actions";
import { valueType } from "antd/es/statistic/utils";
import "./index.css";

const ModalComponent = ({
  open,
  setOpen,
  title,
  setTitle,
  details,
  setDetails,
  id,
}: {
  open: boolean;
  title: valueType;
  details: valueType;
  id?: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<valueType>>;
  setDetails: React.Dispatch<React.SetStateAction<valueType>>;
}) => {
  const [titleStatus, setTitleStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");
  const [detailsStatus, setDetailsStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");

  return (
    <>
      <Modal
        open={open}
        onOk={() =>
          handleOk({
            setOpen,
            titleStatus,
            detailsStatus,
            item: { title, details, id },
          })
        }
        onCancel={() =>
          handleCancel({ setOpen, setTitleStatus, setDetailsStatus })
        }
      >
        <Typography.Title level={3}>Title</Typography.Title>
        <Input
          className="titleInput"
          placeholder="Title"
          status={titleStatus}
          onChange={(chEl) =>
            changeFieldData({
              chEl,
              setter: setTitle,
              statusSet: setTitleStatus,
            })
          }
          value={title}
        />
        <Typography.Title level={3}>Details</Typography.Title>
        <TextArea
          className="detailsInput"
          rows={2}
          status={detailsStatus}
          onChange={(chEl) =>
            changeFieldData({
              chEl,
              setter: setDetails,
              statusSet: setDetailsStatus,
            })
          }
          value={details}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
