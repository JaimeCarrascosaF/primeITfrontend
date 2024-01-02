import React,  {  useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Button, List, Skeleton } from 'antd';
import Item from '../../types/item';
import { getData, onClickDelete, onClickEdit } from './actions';


const CardsComponent = () => {
  const [list, setList] = useState<Item[]>([]);
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    getData({setInitLoading, setList})
  }, []);

    return (
          
          <Content style={{ padding: '0 48px' }}>
            
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Button onClick={e => onClickEdit({e, setList, setInitLoading})} id={String(item.id)}>Edit</Button>, <Button onClick={e => onClickDelete({e, setList, setInitLoading})} id={String(item.id)}>Delete</Button>]}
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