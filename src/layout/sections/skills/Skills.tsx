import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { S } from './Skills_Styles';
import { Icon } from '../../../components/icon/Icon';
import GitIcon from '../../../assets/img/skill-icons-git.png';
import FigmaIcon from '../../../assets/img/skill-icons-figma-light.png';

const progData = [
  {
    tech: 'JAVASCRIPT',
    svgId: 'JS-iconSvg',
  },
  {
    tech: 'TYPESCRIPT',
    svgId: 'TS-iconSvg',
  },
  {
    tech: 'MONGO DB',
    svgId: 'Mongo-iconSvg',
  },
  {
    tech: 'REACT JS',
    svgId: 'React-JS-iconSvg',
  },
  {
    tech: 'REACT NATIVE',
    svgId: 'React-Native-iconSvg',
  },
  {
    tech: 'STYLED COMPONENTS',
    svgId: 'Styled-components-iconSvg',
  },
  {
    tech: 'REDUX',
    svgId: 'Redux-iconSvg',
  },
  {
    tech: 'DOCKER',
    svgId: 'Docker-iconSvg',
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id = {'technologies'}>
      <Container>
        <S.H2>Technologies</S.H2>
        <FlexWrapper direction="column" align="center">
          <FlexWrapper justify='space-between' wrap='wrap'>
            {progData.map((p) => {
              return (
                <S.IconBox>
                  <Icon
                    iconId={p.svgId}
                    width="120px"
                    height="120px"
                    viewBox="0 0 120px 120px"
                  />
                  <S.P>{p.tech}</S.P>
                </S.IconBox>
              );
            })}
          </FlexWrapper>

          <S.TitleAddSkills>
            Additional technologies and skills
          </S.TitleAddSkills>
          <FlexWrapper justify="space-evenly" align="center" width="70%" wrap='wrap' gap='50px'>
            <img src={GitIcon} alt="icon Git" />
            <img src={FigmaIcon} alt="icon Figma" />
            <Icon
              iconId={'SkillsGitHubSvg'}
              width="100px"
              height="100px"
              viewBox="0 0 100px 100px"
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
