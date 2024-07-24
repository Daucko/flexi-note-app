import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import { AiFillPlusCircle } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
import FolderSection from '../components/FolderSection';
import { useState, useEffect } from 'react';
import DateComponent from '../components/DateComponent';
import Modal from '../components/Modal';
import TextEditor from '../components/TextEditor';
import { ColorDiv, colors, Container, num } from '../components/ColoredDivs';

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

const NotesList = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();
  const [notes, setNotes] = useState([
    {
      title: 'Title',
      content: 'content',
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

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

  const date = new Date();
  let todayDate = date.getDate();
  let todayMonth = months[date.getMonth()];

  const closeModal = () => {
    setDay(todayDate);
    setMonth(todayMonth);
    setModalOpen(false);
  };

  const noteText = (title, text) => {
    setTitle(title);
    setContent(text);
  };

  useEffect(() => {
    const newNote = {
      title: title,
      content: content,
      day: day,
      month: month,
    };
    console.log(newNote.day, newNote.month);
    setNotes([...notes, newNote]);
  }, [content]);

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
            <TextEditor noteText={noteText} />
          </Modal>
        </div>
      </NavBar>
      <Title>NotesList</Title>;{/* <FolderSection /> */}
      <DateComponent day={day} month={month} />
      <div>
        {notes.map((note) => {
          // if ((note.day === todayDate) & (note.month === todayMonth)) {
          return (
            <Container>
              <ColorDiv bgColor={colors[num]}>
                <h1>{note.title}</h1>
                <p>
                  {<div dangerouslySetInnerHTML={{ __html: note.content }} />}
                </p>
              </ColorDiv>
            </Container>
          );
          // }
        })}
      </div>
    </Wrapper>
  );
};
export default NotesList;
