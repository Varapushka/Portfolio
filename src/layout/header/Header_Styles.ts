import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Link } from 'react-scroll';

const Header = styled.header`
position:fixed;
top: 0;
right: 0;
left: 0;
z-index: 999;
  height: 95px;
  background-color: rgba(15, 22, 36, 0.5);
  padding: 0 20px;
  @media ${theme.media.tablet} {
    background-color: rgba(15, 22, 36, 0.3);
    height: 70px;

      
    }
  .socialLinks {
    @media ${theme.media.tablet} {
      display: none;
      
    }
  }
`;

const BurgerPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(15, 22, 36, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
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

const BurgerMenu = styled.nav``;
const MenuItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: 'Poppins', 'sans-serif';
  text-align: center;

  :hover,
  :focus-visible,
  :active {
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
  height: 50px;
  width: 50px;
  top: 15px;
  right: 15px;
  z-index: 50;
  background: linear-gradient(
    to right,
    rgba(19, 173, 199, 1),
    rgba(105, 120, 209, 1),
    rgba(148, 93, 214, 1)
  );
  border-radius: 30%;
  span {
    display: blok;
    height: 2px;
    width: 25px;
    background-color: white;
    position: absolute;
    bottom: 45%;
    left: 25%;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: blok;
      height: 2px;
      width: 25px;
      left: 0;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: '';
      display: blok;
      height: 2px;
      width: 25px;
      right: 0;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
  }
`;

export const S = {
  Header,
  BurgerPopup,
  BurgerMenu,
  MenuItem,
  NavLink,
  BurgerButton,
  Nav,
};
