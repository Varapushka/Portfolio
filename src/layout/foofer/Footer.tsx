import React from 'react';
import { SocialLinks } from '../../components/socialLinks/SocialLinks';
import { S } from './Footer_Styles';

export const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.FooterText>Call me:</S.FooterText>
        <S.FooterText>
          <a href="tel:+375-29-567-89-12"> +375-29-567-89-12</a>
        </S.FooterText>
      </div>
      <div>
        <S.FooterText>Email:</S.FooterText>
        <S.FooterText> <a href="mailto:nifelim96@gmail.com"> nifelim96@gmail.com</a></S.FooterText>
      </div>
      <SocialLinks />
    </S.Footer>
  );
};
