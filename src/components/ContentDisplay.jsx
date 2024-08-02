// src/ContentDisplay.js
import React from 'react';
import styled from 'styled-components';
import { LiaEditSolid } from 'react-icons/lia';
import { AiFillDelete } from 'react-icons/ai';

const ContentWrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 10px;
  margin: 2rem;
  border-radius: 2px;
  border: 1px solid #ccc;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: ${({ position }) => (position === 'delete' ? '10px' : '50px')};
  // background: ${({ position }) => (position === 'delete' ? 'red' : 'blue')};
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContentDisplay = ({ content, color, onDelete, onEdit }) => (
  <ContentWrapper color={color}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Button position="edit" onClick={onEdit}>
      <LiaEditSolid color="black" size={20} />
    </Button>
    <Button position="delete" onClick={onDelete}>
      <AiFillDelete color="red" size={20} />
    </Button>
  </ContentWrapper>
);

export default ContentDisplay;
