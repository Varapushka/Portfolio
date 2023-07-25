import React from 'react';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink href="">Projects</NavLink>
        </li>

        <li>
          <NavLink href="">Technologies</NavLink>
        </li>

        <li>
          <NavLink href="">About me</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};


const StyledNav = styled.nav`
  ul {
    display: flex;
    gap:20px;
 list-style-type: none;
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  
`