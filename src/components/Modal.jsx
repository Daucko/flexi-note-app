import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.editorText};
  padding: 20px;
  max-width: 100vw;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const QuillButton = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  border: 2px solid #c1111f;
  color: #003049;
`;

const Modal = ({ addContent, closeModal, initialContent }) => {
  const [editorContent, setEditorContent] = useState(initialContent);

  useEffect(() => {
    setEditorContent(initialContent);
  }, [initialContent]);

  const handleSave = () => {
    addContent(editorContent);
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalWrapper>
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          modules={{
            toolbar: [
              // [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ header: '1' }, { header: '2' }],
              // [{ size: [] }],
              // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              ['bold', 'italic', 'underline'],
              // [
              //   { list: 'ordered' },
              //   { list: 'bullet' },
              //   { indent: '-1' },
              //   { indent: '+1' },
              // ],
              ['link', 'image', 'video'],
              // ['clean'],
            ],
          }}
          formats={[
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
          ]}
          placeholder="Compose your content..."
        />
        <QuillButton onClick={handleSave}>Save</QuillButton>
        <QuillButton onClick={closeModal}>Close</QuillButton>
      </ModalWrapper>
    </>
  );
};

export default Modal;
