import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const SocialLinks = () => {
  return (
    <StyledSocialBox>
      <a href="">
        <Icon iconId={'githubSvg'} width="32px" height="32px" />
      </a>
      <a href="">
        <Icon iconId={'linkedinSvg'} width="32px" height="32px" />
      </a>
      <a href="">
        <Icon iconId={'figmaSvg'} width="20px" height="32px" />
      </a>
    </StyledSocialBox>
  );
};

const StyledSocialBox = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    gap: 30px;
  }
`;
