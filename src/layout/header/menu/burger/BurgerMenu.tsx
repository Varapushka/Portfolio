import React, { useState } from 'react';
import { MenuItems } from '../MenuItems';
import { S } from '../../Header_Styles';

export const BugerMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBuregerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <S.BurgerMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBuregerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.BurgerPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <MenuItems/>
      </S.BurgerPopup>
    </S.BurgerMenu>
  );
};

