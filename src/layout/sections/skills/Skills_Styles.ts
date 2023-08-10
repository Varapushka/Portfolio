import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Skills = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 170px;

  svg:hover {
    stroke: none;
  }
`;

const Tech = styled.div`
  width: 100%;
`;

const H2 = styled.h2`
  margin-top: 100px;
  font-size: 3em;
  font-weight: 600;
  @media ${theme.media.tablet} {
    font-size: 2em;
  }
`;
const TitleAddSkills = styled.h2`
  margin-top: 130px;
  margin-bottom: 90px;
  font-size: 3em;
  font-weight: 600;

  @media ${theme.media.tablet} {
    font-size: 1.7em;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: calc(33.33% - 10px);
  margin-right: 10px;
  margin-top: 5em;
  &:last-child {
    margin-right: 0px;
  }

`;

const P = styled.p`
margin-top: 1em;
`;
export const S = {
  Skills,
  Tech,
  H2,
  TitleAddSkills,
  IconBox,
  P,
};
