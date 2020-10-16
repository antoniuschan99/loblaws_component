import React from 'react';
import styled from 'styled-components';

const MainCardComponent = styled.button`
  align-items: center;
  background: none;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  justify-content: center;
  max-width: 800px;
  margin: 25px;
  padding: 50px;
`;

const Image = styled.img`
  width: 50%;
`;

const Title = styled.div`
  font-weight: 800;
  margin: 10px 0 20px 0;
`;

export function Card(props) {
  const {
    description,
    title,
    thumb,
    onClick
  } = props;

  return (
    <MainCardComponent
      onClick={onClick}
    >
      <Image src={thumb} />
      <Title>{title}</Title>
      <div>{description}</div>
    </MainCardComponent>
  )
};