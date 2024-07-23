import styled from 'styled-components';
import Hmpic from '../assets/home.jpeg';

const HeaderText = styled.h1`
  text-align: center;
  color: #003049;
`;

const HighlightedText = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    right: -5px;
    bottom: -10px;
    left: -5px;
    transform: skewY(-3deg);
    background-color: rgba(121, 0, 0, 0.6);
    z-index: -1;
  }
`;

const ImageContainer = styled.section`
  width: 70%;
  height: 20rem;
`;

const Text = styled(HeaderText)`
  color: #003049;
`;

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const Home = () => {
  return (
    <div>
      <HeaderText>
        Welcome to our <HighlightedText>note-taking</HighlightedText> app!
      </HeaderText>
      <ImageContainer>
        <img src={Hmpic} alt="" style={imageStyle} />
      </ImageContainer>
      <Text>
        Effortlessly create, edit, and organize your notes all in one place.
      </Text>
    </div>
  );
};
export default Home;
