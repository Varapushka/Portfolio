import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";


const Projects = styled.section`
position: relative;
`
const CardBox = styled(FlexWrapper)`
  flex-wrap: wrap;
  max-width: 1320px;
  justify-content: space-around;
  gap: 15px;
`;


const H2 = styled.h2`
font-weight: 600;
font-size: 4em;
margin: 100px 0 70px;
@media ${theme.media.tablet} {
    font-size: 2em;

  }
`;
const Card = styled(FlexWrapper)`
  flex-direction: column;
  max-width: 450px;
  max-height: 700px;
  border: 1px solid rgba(163, 157, 157, 1);
  border-radius: 50px 0px 50px 0px;
  margin-bottom: 100px;
  padding: 13px 25px 45px;
`;

const ProjImg = styled.img`
  height: 266px;
  margin-bottom: 25px;
  border-radius: 40px 0px 8px 8px;
  object-fit: cover;
  transition: 2s;
  @media ${theme.media.tablet} {
    height: 190px;
  }
  :hover {
    transform: scale(1.14);
  }
`;

const Title = styled.h3`
position: relative;
font-size: 1.9em;
font-weight: 600;
margin: 0 auto;
@media ${theme.media.tablet} {
    font-size: 1.5em;

  }

::after {
  content: '';
  display: inline-block;
  position:absolute;
  left: -30px;
  right: -30px;
  bottom: -25px;
  height: 4px;
  background: linear-gradient(92deg, #8643dc 0%,  #00C0FD 100%);
}
`;

const Text = styled.p`
font-weight: 600;
margin: 54px 0 25px;

`;

export const S = {
  Projects,
  CardBox,
  H2,
  Card,
  ProjImg,
  Title,
  Text,
}