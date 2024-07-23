import { LuPlus } from 'react-icons/lu';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import styled from 'styled-components';
{
  /* <AiOutlineFolderOpen />; */
}

const FolderSectionWrapper = styled.section`
  border: 2px solid red;
  padding-block: 1rem;
  margin-inline: 2rem;
`;

const EmptyFolderContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  cursor: pointer;
`;

const FolderSection = () => {
  return (
    <FolderSectionWrapper>
      <h1>FOLDERS</h1>
      <EmptyFolderContainer>
        <div>
          <LuPlus size="40" />
        </div>
      </EmptyFolderContainer>
    </FolderSectionWrapper>
  );
};
export default FolderSection;
