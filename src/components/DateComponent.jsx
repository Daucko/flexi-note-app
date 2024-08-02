import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DatesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-inline: 2rem;
  // border: 2px solid green;
  // background: blue;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: between;
  background: rgba(0, 0, 0, 0.1);
  border: 2px solid red;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 3.5rem;
  cursor: pointer;
`;

const Separator = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 0.2rem;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 1px;
  font-size: 0.8rem;
  padding: 2rem;
`;

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

const DateComponent = ({ day, month }) => {
  // const [dates, setDates] = useState([
  //   {
  //     day: 22,
  //     month: 7,
  //   },
  //   {
  //     day: 23,
  //     month: 7,
  //   },
  //   {
  //     day: 24,
  //     month: 7,
  //   },
  //   {
  //     day: 25,
  //     month: 7,
  //   },
  // ]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    return { year: `${year}`, month: `${month}`, day: `${day}` };
  };

  // Function to get an array of dates
  const getDates = () => {
    const dates = [];
    const today = new Date();

    // Add previous 5 days
    for (let i = 2; i > 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(formatDate(date));
    }

    // Add today
    dates.push(formatDate(today));

    // Add next 5 days
    for (let i = 1; i <= 2; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(formatDate(date));
    }

    return dates;
  };

  const dates = getDates();

  const handleClick = () => {};

  return (
    <div>
      <Title>RECENT NOTES</Title>
      <DatesWrapper>
        {dates.map((date) => {
          return (
            <DateContainer>
              {date.day} <Separator></Separator> {date.month}
            </DateContainer>
          );
        })}
      </DatesWrapper>
    </div>
  );
};
export default DateComponent;
