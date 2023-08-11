import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`;

const MainWrap = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
`;

const MainTextbox = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 50%;
  @media ${theme.media.tablet} {
    max-width: 80%;
  }
`;
const MainHello = styled.h3`
  font-family: Poppins, sans-serif;
  font-size: 0.8em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MainTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 3em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 25px;
  @media ${theme.media.tablet} {
    font-size: 2em;
  }
`;

const MainDescription = styled.p`
  color: #bcbcbc;
  font-weight: 600;
  margin-top: 1.6em;
  margin-bottom: 3em;
`;

const PhotoFrame = styled.div`
  position: relative;
  border-radius: 50px 0px 50px 0px;
  z-index: 2;

  ::before {
    content: '';
    position: absolute;
    border-radius: 50px 0px 50px 0px;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: 2px;
    background: linear-gradient(92deg, #8643dc 0%, #00c0fd 100%);
    z-index: 1;
  }
`;

const Photo = styled.img`
  position: relative;
  z-index: 3;
  width: 350px;
  height: 430px;
  border-radius: 50px 0px 50px 0px;
  object-fit: cover;

  @media ${theme.media.tablet} {
    width: 280px;
    height: 350px;
  }
`;
const H1 = styled.h1`
display: none;
`
export const S = {
  Main,
  MainWrap,
  MainTextbox,
  MainHello,
  MainTitle,
  MainDescription,
  PhotoFrame,
  Photo,
  H1,
};
