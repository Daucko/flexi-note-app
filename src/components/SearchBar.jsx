import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 80%;
  max-width: 500px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <SearchInput
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
