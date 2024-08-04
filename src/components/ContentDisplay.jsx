// src/ContentDisplay.js
import React from 'react';
import styled from 'styled-components';
import { HoverDeleteText, HoverEditText } from './HoverText';
const ContentWrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 10px;
  margin: 2rem;
  border-radius: 2px;
  border: 1px solid #ccc;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  max-width: 100vw;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: ${({ position }) => (position === 'delete' ? '10px' : '50px')};
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

const DateDisplay = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const DateComp = styled.span`
  font-size: 1rem;
  font-weight: 800;
  padding: 5px;
`;

const ContentDiv = styled.div`
  line-height: 0.5rem;
  max-width: 100%;
  overflow: auto;
  margin-top: 1rem;
`;

const ContentDisplay = ({ content, color, onDelete, onEdit, getDate }) => {
  // const date = getDate();
  // console.log(getDate);
  const day = getDate[0].day;
  const month = getDate[0].month;
  const year = getDate[0].year;

  return (
    <ContentWrapper color={color}>
      <ContentDiv dangerouslySetInnerHTML={{ __html: content }} />
      <Button position="edit" onClick={onEdit}>
        <HoverEditText />
      </Button>
      <Button position="delete" onClick={onDelete}>
        <HoverDeleteText />
      </Button>
      <DateDisplay>
        <DateComp>{day}</DateComp>
        <DateComp>{month}</DateComp>
        <DateComp>{year}</DateComp>
      </DateDisplay>
    </ContentWrapper>
  );
};

export default ContentDisplay;
