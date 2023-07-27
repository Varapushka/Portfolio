import React from 'react';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <ListItem>
          <NavLink href="">
            Projects
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink href="">
            Technologies
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink href="">
            About me
          </NavLink>
        </ListItem>
      </ul>
    </StyledNav>
  );
};


const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
  }
`;
const ListItem = styled.li`

`;

const NavLink = styled.a`
  text-decoration: none;
  font-family: 'Poppins', 'sans-serif';
  font-size: 30px;
  text-align: center;
  :hover, :focus-visible{
  color: rgba(19, 173, 199, 1);
}
`;

