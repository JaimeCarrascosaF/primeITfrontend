import React, { useState } from "react";
import { Layout } from "antd";
import HeaderContent from "./HeaderContent";
import CardsComponent from "./Cards";
import FooterComponent from "./Footer";
import ModalComponent from "./FieldView";
import { valueType } from "antd/es/statistic/utils";

const TodoComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [titleElement, setTitleElement] = useState<valueType>("");
  const [detailsElement, setDetailsElement] = useState<valueType>("");
  const [modalId, setModalId] = useState<number>();
  return (
    <Layout>
      <HeaderContent />
      <CardsComponent
        setModalOpen={setModalOpen}
        setTitle={setTitleElement}
        setDetails={setDetailsElement}
        setModalId={setModalId}
        isModalOpen={isModalOpen}
      />
      <FooterComponent />
      <ModalComponent
        open={isModalOpen}
        setOpen={setModalOpen}
        title={titleElement}
        details={detailsElement}
        setTitle={setTitleElement}
        setDetails={setDetailsElement}
        id={modalId}
      />
    </Layout>
  );
};

export default TodoComponent;
