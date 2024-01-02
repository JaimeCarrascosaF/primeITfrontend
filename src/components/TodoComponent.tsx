import React from 'react';
import {  Layout   } from 'antd';
import HeaderContent from './HeaderContent';
import CardsComponent from './Cards';
import FooterComponent from './Footer';





const TodoComponent = () => {
    return (
        <Layout>
          <HeaderContent/>
          <CardsComponent/>
          <FooterComponent/>
        </Layout>
    );
};

  export default TodoComponent;