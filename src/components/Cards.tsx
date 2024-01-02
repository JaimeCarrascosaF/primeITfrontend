import React,  {  useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Button, List, Skeleton } from 'antd';
import Item from '../types/item';


const CardsComponent = () => {
  const [list, setList] = useState<Item[]>([]);
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/list`)
  .then(response => response.json())
  .then(data => {
    setInitLoading(false);
    setList(data.items);
  });
  }, []);

  const onClickEdit = (el: any) => {
    console.log("element", el.currentTarget.id);
  };
  const onClickDelete = (el: any) => {
    console.log("element", el.currentTarget.id);
  };
    return (
          
          <Content style={{ padding: '0 48px' }}>
            
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Button onClick={onClickEdit} id={String(item.id)}>Edit</Button>, <Button onClick={onClickDelete} id={String(item.id)}>Delete</Button>]}
        >
          <Skeleton avatar title={false} loading={initLoading} active>
            <List.Item.Meta
              title={item.title}
              description={item.details}
            />
          </Skeleton>
        </List.Item>
      )}
    />
          </Content>
      );
            };

  export default CardsComponent;