import React, { useState } from "react";
import { Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { changeFieldData, handleCancel, handleOk } from "./actions";
import { valueType } from "antd/es/statistic/utils";

const ModalComponent = ({
  open,
  setOpen,
  title,
  setTitle,
  details,
  setDetails,
}: {
  open: boolean;
  title: valueType;
  details: valueType;
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
        title="Todo item modal"
        open={open}
        onOk={() => handleOk({ setOpen })}
        onCancel={() => handleCancel({ setOpen })}
      >
        <Input
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
        <TextArea
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
