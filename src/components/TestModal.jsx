// src/ColoredDivs.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Array of colors
const colors = [
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ColorDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
`;

const Modal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TestModal = () => {
  const [divs, setDivs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const addDiv = () => {
    setDivs([...divs, colors[colorIndex]]);
    setColorIndex((colorIndex + 1) % colors.length);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add Color Div</button>
      <Modal show={showModal}>
        <h2>Add a new color div</h2>
        <button onClick={addDiv}>Add</button>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
      <Container>
        {divs.map((color, index) => (
          <ColorDiv key={index} bgColor={color}>
            {color}
          </ColorDiv>
        ))}
      </Container>
    </div>
  );
};

export default TestModal;
