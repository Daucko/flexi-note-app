import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CurrentTime from './CurrentTime';

const DatesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-inline: 2rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid red;
  border-radius: 1rem;
  padding: 0.5rem;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const WelcomeText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const TimeWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const TimeDescription = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
  background: #c1111f;
  color: ${({ theme }) => theme.colors.background};
`;

const DateComp = styled.span`
  font-size: 2rem;
  padding: 5px;
`;

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const DateComponent = ({ contents }) => {
  const today = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    return { year: `${year}`, month: `${month}`, day: `${day}` };
  };

  const todayDate = formatDate(today);

  return (
    <div>
      <WelcomeText> Welcome to your new note-taking hub!</WelcomeText>
      <Title>
        Keep all your notes organized: easily create, edit, and access them in
        one place.
      </Title>

      <TimeWrapper>
        <TimeDescription>TODAY</TimeDescription>
        <DateContainer>
          <DateComp>{todayDate.day}</DateComp>
          <DateComp>{todayDate.month}</DateComp>
          <DateComp>{todayDate.year}</DateComp>
        </DateContainer>
        <CurrentTime />
      </TimeWrapper>
    </div>
  );
};
export default DateComponent;
