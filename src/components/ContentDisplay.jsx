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
  // color: black;
  bottom: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const ContentDisplay = ({ content, color, onDelete, onEdit, getDate }) => {
  // const date = getDate();
  console.log(getDate);

  return (
    <ContentWrapper color={color}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ maxWidth: '50vw' }}
      />
      <Button position="edit" onClick={onEdit}>
        <HoverEditText />
      </Button>
      <Button position="delete" onClick={onDelete}>
        <HoverDeleteText />
      </Button>
      <DateDisplay>
        {getDate[0].day}
        {getDate[0].month}
        {getDate[0].year}
      </DateDisplay>
    </ContentWrapper>
  );
};

export default ContentDisplay;
