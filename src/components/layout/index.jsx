import React from 'react';
import Header from './header';

import { Sidebar } from 'components';

import Container, { Body, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <Content>
          { children }
        </Content>
      </Body>
    </Container>
  );
};

export default Layout;
