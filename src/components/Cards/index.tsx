import React, { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Button, List, Skeleton } from "antd";
import Item from "../../types/item";
import { getData, onClickDelete, onClickEdit } from "./actions";
import { valueType } from "antd/es/statistic/utils";

const CardsComponent = ({
  setModalOpen,
  setTitle,
  setDetails,
  setModalId,
  isModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<valueType>>;
  setDetails: React.Dispatch<React.SetStateAction<valueType>>;
  setModalId: React.Dispatch<React.SetStateAction<number | undefined>>;
  isModalOpen: boolean;
}) => {
  const [list, setList] = useState<Item[]>([]);
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    if (!isModalOpen) getData({ setInitLoading, setList });
  }, [isModalOpen]);

  return (
    <Content style={{ padding: "0 48px" }}>
      <List
        className="loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                onClick={() =>
                  onClickEdit({
                    setList,
                    setInitLoading,
                    setModalOpen,
                    setTitle,
                    setDetails,
                    setModalId,
                    item,
                  })
                }
              >
                Edit
              </Button>,
              <Button
                onClick={() => onClickDelete({ setList, setInitLoading, item })}
              >
                Delete
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={initLoading} active>
              <List.Item.Meta title={item.title} description={item.details} />
            </Skeleton>
          </List.Item>
        )}
      />
    </Content>
  );
};

export default CardsComponent;
