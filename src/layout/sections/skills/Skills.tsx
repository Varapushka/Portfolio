import React from 'react';
import styled from 'styled-components';
import { Progress } from '../../../components/progress/Progress';
import { UlTech } from '../../../components/UiOfTech/UlOfTech';

const techItems = [
  'Git',
  'Quick learning',
  'Engagement',
  'B2 english',
  'Teamwork',
];

export const Skills = () => {
  return (
    <section>
      <StyledTitle>Technologies</StyledTitle>
      <StyledTech>
        <Progress tech="React" value="1" />
        <Progress tech="Html" value="3" />
        <Progress tech="JavaScript, TypeScript, JQuery" value="2" />
        <Progress tech="UI design in Figma" value="1" />
        <Progress tech="React Native" value="1" />
      </StyledTech>
      <StyledAddTech>
        <StyledH2>Additional technologies and skills</StyledH2>
        <UlTech UlItems={techItems} />
      </StyledAddTech>
    </section>
  );
};

// const StyledSkills = styled.section`
//   background-color: rgba(15, 22, 36, 1);
// `;

const StyledTech = styled.div``;

const StyledAddTech = styled.div``;

const StyledTitle = styled.title``;

const StyledH2 = styled.h2`
`;
