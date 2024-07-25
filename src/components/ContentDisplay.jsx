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
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: ${({ position }) => (position === 'delete' ? '10px' : '50px')};
  background: ${({ position }) => (position === 'delete' ? 'red' : 'blue')};
  color: white;
  border: none;
  cursor: pointer;
`;

const ContentDisplay = ({ content, color, onDelete, onEdit }) => (
  <ContentWrapper color={color}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <Button position="edit" onClick={onEdit}>
      <LiaEditSolid />
    </Button>
    <Button position="delete" onClick={onDelete}>
      <AiFillDelete />
    </Button>
  </ContentWrapper>
);

export default ContentDisplay;
