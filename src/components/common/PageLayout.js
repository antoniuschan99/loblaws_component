import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

const Content = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 10px;
`;

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>
          {children}
      </Content>
    </>
  )
};