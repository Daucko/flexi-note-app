// src/RichTextEditor.js
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const TextEditor = ({ noteText }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const quillRef = useRef(null);

  const handleChange = (value) => {
    setText(value);
  };

  const handleGetHTML = () => {
    const quill = quillRef.current.getEditor();
    const semanticHTML = quill.root.innerHTML;
    noteText(title, semanticHTML);
    console.log(semanticHTML);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Note Title"
        />
      </form>
      <ReactQuill
        ref={quillRef}
        value={text}
        onChange={handleChange}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        placeholder="Start writing..."
      />
      <button onClick={handleGetHTML}>Save</button>
    </div>
  );
};

// Quill modules to include
TextEditor.modules = {
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
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

// Quill formats to include
TextEditor.formats = [
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

export default TextEditor;
