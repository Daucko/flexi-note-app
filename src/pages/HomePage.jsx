// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewModal from '../components/NewModal';
import ContentDisplay from '../components/ContentDisplay';
import { VscSearch } from 'react-icons/vsc';
import { AiFillPlusCircle } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
import FolderSection from '../components/FolderSection';
import DateComponent from '../components/DateComponent';

const Wrapper = styled.main`
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

// const LogoBox = styled.div`
//   wid
// `

const PlusIcon = styled.span`
  // position: absolute;
  // top: 5%;
  // right: 2%;
`;

const Title = styled.h1`
  padding-left: 2rem;
  font-size: 1.5rem;
  color: #003049;
`;

const SearchBox = styled.section`
  position: relative;
  width: 20rem;
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 20%;
  right: 2%;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &::focus {
    border: 2px solid #c1111f;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const colors = [
  '#FF6347',
  '#6A5ACD',
  '#20B2AA',
  '#FFD700',
  '#FF69B4',
  '#8A2BE2',
  '#5F9EA0',
  '#D2691E',
  '#FF4500',
  '#7B68EE',
];

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contents, setContents] = useState([]);
  const [editingContentIndex, setEditingContentIndex] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addContent = (content, index = null) => {
    if (index !== null) {
      const updatedContents = [...contents];
      updatedContents[index] = content;
      setContents(updatedContents);
    } else {
      setContents([...contents, content]);
    }
    closeModal();
  };

  const deleteContent = (index) => {
    setContents(contents.filter((_, i) => i !== index));
  };

  const editContent = (index) => {
    setEditingContentIndex(index);
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <NavBar>
        <img src={Logo} alt="" style={{ width: '5rem', height: '5rem' }} />
        <SearchBox>
          <SearchIcon>
            <VscSearch color="black" size="20" />
          </SearchIcon>
          <Input type="search" name="search" placeholder="Search..." />
        </SearchBox>
        <div>
          <PlusIcon onClick={openModal}>
            <AiFillPlusCircle color="#C1111F" size={40} />
          </PlusIcon>
        </div>
      </NavBar>
      <DateComponent />

      {isModalOpen && (
        <NewModal
          addContent={addContent}
          closeModal={closeModal}
          initialContent={
            editingContentIndex !== null ? contents[editingContentIndex] : ''
          }
          index={editingContentIndex}
          setEditingContentIndex={setEditingContentIndex}
        />
      )}
      {contents.map((content, index) => (
        <ContentDisplay
          key={index}
          content={content}
          color={colors[index % colors.length]}
          onDelete={() => deleteContent(index)}
          onEdit={() => editContent(index)}
        />
      ))}
    </Wrapper>
  );
};

export default HomePage;
