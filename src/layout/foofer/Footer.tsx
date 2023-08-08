import React from 'react';
import { SocialLinks } from '../../components/socialLinks/SocialLinks';
import {S} from './Footer_Styles'

export const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.FooterText>Call me:</S.FooterText>
        <S.FooterText> +375-29-567-89-12</S.FooterText>
      </div>
      <div>
        <S.FooterText>Email:</S.FooterText>
        <S.FooterText> nifelim96@gmail.com</S.FooterText>
      </div>
      <SocialLinks />
    </S.Footer>
  );
};

