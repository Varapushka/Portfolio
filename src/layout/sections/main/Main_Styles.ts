import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

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
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media ${theme.media.tablet} {
    font-size: 0.6em;

  }
`;

const MainTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 3em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media ${theme.media.tablet} {
    font-size: 1.7em;

  }
`;

const MainDescription = styled.p`
  color: #bcbcbc;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: 27px;
  margin-bottom: 54px;
  @media ${theme.media.tablet} {
    font-size: 1em;

  }
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

  @media ${theme.media.tablet} {
    width: 280px;
    height: 350px;
  }
`;


export const S = {
  Main,
  MainWrap,
  MainTextbox,
  MainHello,
  MainTitle,
  MainDescription,
  PhotoFrame,
  Photo,
}