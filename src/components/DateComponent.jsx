import { useState } from 'react';
import styled from 'styled-components';

const DatesWrapper = styled.section`
  display: flex;
  background: blue;
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
`;

const DateComponent = ({ day, month }) => {
  const [dates, setDate] = useState([
    {
      day,
      month,
    },
  ]);

  return (
    <div>
      <Title>RECENT NOTES</Title>
      <DatesWrapper>
        {dates.filter((date) => {
          const newDate = {
            day: day,
            month: month,
          };
          setDate([...dates, newDate]);
        })}
        {day && month ? (
          <DateContainer>
            {day} <Separator></Separator> {month}
          </DateContainer>
        ) : null}
      </DatesWrapper>
    </div>
  );
};
export default DateComponent;
