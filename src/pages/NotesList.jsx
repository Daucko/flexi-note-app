import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import { AiFillPlusCircle } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
import FolderSection from '../components/FolderSection';
import { useState } from 'react';
import DateComponent from '../components/DateComponent';
import Modal from '../components/Modal';

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

const NotesList = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    const date = new Date();
    setDay(date.getDate());
    setMonth(months[date.getMonth()]);
    console.log(day, month);
    setModalOpen(false);
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Modal Header</h2>
            <p>This is the content of the modal.</p>
          </Modal>
        </div>
      </NavBar>
      <Title>NotesList</Title>;{/* <FolderSection /> */}
      <DateComponent day={day} month={month} />
      <div></div>
    </Wrapper>
  );
};
export default NotesList;
