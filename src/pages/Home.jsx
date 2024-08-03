import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import ContentDisplay from '../components/ContentDisplay';
import SearchBar from '../components/SearchBar';
import { AiFillPlusCircle } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
import DateComponent from '../components/DateComponent';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import { nightTheme, dayTheme } from '../components/Themes';
import ThemeToggle from '../components/ThemeToggle';

const colors = [
  'rgba(255, 99, 71, 0.3)',
  'rgba(106, 90, 205, 0.3)',
  'rgba(32, 178, 170, 0.3)',
  'rgba(255, 215, 0, 0.3)',
  'rgba(193, 17, 31, 0.3)',
  'rgba(0, 48, 73, 0.3)',
  'rgba(210, 105, 30, 0.3)',
  'rgba(255, 69, 0, 0.3)',
  'rgba(123, 104, 238, 0.3)',
  'rgba(102, 155, 188, 0.3)',
];

const Wrapper = styled.main`
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const AppWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const PlusIcon = styled.span`
  cursor: pointer;
  // position: absolute;
  // top: 5%;
  // right: 2%;
`;

const EmptyDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  margin-inline: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contents, setContents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editableContent, setEditableContent] = useState(null);

  const [isNight, setIsNight] = useState(true);

  const openModal = (content = null) => {
    setEditableContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const addContent = (content) => {
    if (editableContent) {
      setContents(
        contents.map((item) =>
          item.id === editableContent.id ? { id: item.id, content } : item
        )
      );
    } else {
      setContents([...contents, { id: Date.now(), content }]);
    }
    closeModal();
  };

  const deleteContent = (id) => {
    setContents(contents.filter((content) => content.id !== id));
  };

  const filteredContents = contents.filter((item) =>
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  return (
    <ThemeProvider theme={isNight ? nightTheme : dayTheme}>
      <GlobalStyles />
      <ThemeToggle toggleTheme={toggleTheme} style />
      <Wrapper>
        <NavBar>
          <img src={Logo} alt="" style={{ width: '5rem', height: '5rem' }} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div>
            <PlusIcon onClick={() => openModal()}>
              <AiFillPlusCircle color="#C1111F" size={40} />
            </PlusIcon>
          </div>
        </NavBar>
        <DateComponent />
        {contents.length === 0 && (
          <EmptyDiv>
            <h2>There's no note yet.</h2>
            <p>Start adding some!</p>
          </EmptyDiv>
        )}
        {isModalOpen && (
          <Modal
            addContent={addContent}
            closeModal={closeModal}
            initialContent={editableContent?.content || ''}
          />
        )}
        {filteredContents.map((item, index) => (
          <ContentDisplay
            key={item.id}
            content={item.content}
            color={colors[index % colors.length]}
            onDelete={() => deleteContent(item.id)}
            onEdit={() => openModal(item)}
          />
        ))}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
