import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

export const BugerMenu = () => {
  return (
    <StyledBurgerMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <BurgerPopup isOpen={false}>
        <ul>
          <ListItem>
            <NavLink href="">Projects</NavLink>
          </ListItem>

          <ListItem>
            <NavLink href="">Technologies</NavLink>
          </ListItem>

          <ListItem>
            <NavLink href="">About me</NavLink>
          </ListItem>
        </ul>
      </BurgerPopup>
    </StyledBurgerMenu>
  );
};

const BurgerPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(15, 22, 36, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  display: none;

  ${(props) => props.isOpen && css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;

    `}

  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledBurgerMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;
const ListItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  font-family: 'Poppins', 'sans-serif';
  font-size: 30px;
  text-align: center;

  :hover,
  :focus-visible {
    background: linear-gradient(
      to right,
      rgba(19, 173, 199, 1),
      rgba(105, 120, 209, 1),
      rgba(148, 93, 214, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  height: 100px;
  width: 100px;
  top: -15px;
  right: 0%;
  z-index: 50;
  span {
    display: blok;
    height: 2px;
    width: 36px;
    background-color: white;
    position: absolute;
    bottom: 50px;
    left: 45%;

    ${(props) => props.isOpen && css<{ isOpen: boolean }>` 
    background-color: rgba(255, 255, 255, 0);

    `}

    &::before {
      content: '';
      display: blok;
      height: 2px;
      width: 36px;
      left: 0;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${(props) => props.isOpen && css<{ isOpen: boolean }>` 
      transform:  rotate(-45deg) translateY(0);    
    `}


    }
    &::after {
      content: '';
      display: blok;
      height: 2px;
      width: 28px;
      right: 0;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${(props) => props.isOpen && css<{ isOpen: boolean }>` 
      transform:  rotate(45deg) translateY(0);    
      width: 36px;
    
    `}


    }
  }
`;
