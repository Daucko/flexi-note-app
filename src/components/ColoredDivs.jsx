import styled from 'styled-components';

// Array of colors
export const colors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A1',
  '#A133FF',
  '#FF8333',
  '#33FFC1',
  '#8AFF33',
  '#FF3333',
  '#FF33D1',
];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ColorDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 20px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
`;

export let num = Math.floor(Math.random() * colors.length);
