import React from 'react';
import { ProjCard } from '../../../components/projCard/ProjCard';
import projPhoto from '../../../assets/img/image-1.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Projects = () => {
  return (
    <section>
      <Container>
        <StyledH2>Projects</StyledH2>
        <CardBox>
          <ProjCard
            src={projPhoto}
            title="Project 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />
          <ProjCard
            src={projPhoto}
            title="Project 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />
          <ProjCard
            src={projPhoto}
            title="Project 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />
          <ProjCard
            src={projPhoto}
            title="Project 4"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />
        </CardBox>
      </Container>
    </section>
  );
};

const CardBox = styled(FlexWrapper)`
  flex-wrap: wrap;
  max-width: 1320px;
  justify-content: space-around;
`;


const StyledH2 = styled.h2`
font-weight: 600;
font-size: 4em;
margin: 45px 0 95px;
@media ${theme.media.tablet} {
    font-size: 2em;

  }
`;
