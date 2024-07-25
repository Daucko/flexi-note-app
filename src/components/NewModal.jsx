// src/Modal.js
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
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

const NewModal = ({
  addContent,
  closeModal,
  initialContent,
  index,
  setEditingContentIndex,
}) => {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    if (initialContent) {
      setEditorContent(initialContent);
    }
  }, [initialContent]);

  const handleSave = () => {
    addContent(editorContent, index);
    setEditingContentIndex(null);
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
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Close</button>
      </ModalWrapper>
    </>
  );
};

export default NewModal;