import React from 'react';
import { S } from '../Header_Styles';

export const MenuItems: React.FC = () => {
  return (
    <ul>
      <S.MenuItem>
        <S.NavLink activeClass='active' spy={true} smooth={true} to="projects">
          Projects
        </S.NavLink>
      </S.MenuItem>

      <S.MenuItem>
        <S.NavLink activeClass='active' spy={true} smooth={true} to="technologies">
          Technologies
        </S.NavLink>
      </S.MenuItem>

      <S.MenuItem>
        <S.NavLink activeClass='active' spy={true} smooth={true} to="contact">
          Contact
        </S.NavLink>
      </S.MenuItem>
    </ul>
  );
};
