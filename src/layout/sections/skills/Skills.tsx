import React from 'react';
import { Progress } from '../../../components/progress/Progress';
import { UlTech } from '../../../components/UiOfTech/UlOfTech';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {S} from './Skills_Styles'

const techItems = [
   'Engagement', 
   'Git',
  'Quick learning',
  'B2 english',
  'Teamwork',
  'RWD'
];

const progData = [
  {
    tech: "React",
    value: "2",
    level: "Regular"
  },
  {
    tech: "Html",
    value: "3",
    level: "Advansed"
  },
  {
    tech: "JavaScript, TypeScript, JQuery",
    value: "2",
    level: "Regular"
  },
  {
    tech: "UI design in Figma",
    value: "1",
    level: "Beginner"
  },
  {
    tech: "React Native",
    value: "1",
    level: "Beginner"
  },

]

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <S.H2>Technologies</S.H2>
        <FlexWrapper direction="column" align="center">
          <S.Tech>
            {progData.map((p)=> {
              return <Progress tech={p.tech} value={p.value} level={p.level}/>
            })}
          </S.Tech>
          <S.TitleAddSkills>Additional technologies and skills</S.TitleAddSkills>
          <S.AddTech>
            <UlTech UlItems={techItems} />
          </S.AddTech>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

