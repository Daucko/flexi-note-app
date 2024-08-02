// src/HoverText.js
import React from 'react';
import styled from 'styled-components';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin2Line } from 'react-icons/ri';

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the icon */
  left: 50%;
  margin-left: -60px;
  transition: opacity 0.3s;

  /* Arrow pointing downwards */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const HoverEditText = () => (
  <IconWrapper>
    <LiaEditSolid color="black" size={20} />
    <TooltipText>Edit Note.</TooltipText>
  </IconWrapper>
);

export const HoverDeleteText = () => (
  <IconWrapper>
    <RiDeleteBin2Line color="black" size={20} />
    <TooltipText>Delete Note.</TooltipText>
  </IconWrapper>
);
