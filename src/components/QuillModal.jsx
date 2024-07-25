// src/QuillModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiFillDelete } from 'react-icons/ai';

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

const Modal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  min-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 5rem;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const ContentDivsWrapper = styled.div`
  margin: 0.5rem 2rem;
  position: relative;
`;

const ContentDiv = styled.div`
  width: calc(100vw - 5rem);
  margin: 0.5rem;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
`;

const DeleteButton = styled.span`
  border: 1px solid red;
`;

const QuillModal = ({ isModalOpen, closeModal }) => {
  // const [showModal, setShowModal] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [contentDivs, setContentDivs] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  const handleSave = () => {
    setContentDivs([
      ...contentDivs,
      { content: editorContent, color: colors[colorIndex] },
    ]);
    setColorIndex((colorIndex + 1) % colors.length);
    closeModal();
    setEditorContent(''); // Clear the editor content after saving
  };
  // const openModal = () => {
  //   setShowModal(props.isTrue);
  // };
  // Quill editor modules
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  // Quill editor formats
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <Container>
      {/* <Button onClick={() => setShowModal(props.isTrue)}>
        Open Quill Editor
      </Button> */}
      <Overlay show={isModalOpen} onClick={closeModal} />
      <Modal show={isModalOpen}>
        <h2>Quill Editor</h2>
        <ReactQuill
          theme="snow"
          value={editorContent}
          onChange={setEditorContent}
          modules={modules}
          formats={formats}
          placeholder="Start writing..."
        />
        <Button onClick={handleSave}>Save</Button>
      </Modal>
      <ContentDivsWrapper>
        <DeleteButton>
          <AiFillDelete />
        </DeleteButton>
        {contentDivs.map((div, index) => {
          const date = new Date().getTime();
          return (
            <ContentDiv
              key={date}
              bgColor={div.color}
              dangerouslySetInnerHTML={{ __html: div.content }}
            />
          );
        })}
      </ContentDivsWrapper>
    </Container>
  );
};

export default QuillModal;
