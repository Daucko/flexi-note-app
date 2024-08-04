import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TimeComponent = styled.span`
  font-size: 2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid #c1111f;
`;

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TimeWrapper>
      <TimeComponent>
        {time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}
      </TimeComponent>
      :
      <TimeComponent>
        {time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}
      </TimeComponent>
      :
      <TimeComponent>
        {time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}
      </TimeComponent>
    </TimeWrapper>
  );
}

export default CurrentTime;
