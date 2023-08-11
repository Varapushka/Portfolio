import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import { StyledButton } from '../../../components/Button';
import { theme } from '../../../styles/Theme';
import { S } from './Contscts_Styles'

export const Contacts: React.FC = () => {
  return (
    <S.Contact id = {'contact'}>
      <Container>
        <FlexWrapper direction='column' align='center'>
          <S.ContactTitle>Contact</S.ContactTitle>
          <S.ContactForm>
            <S.Field placeholder={' Name'} />
            <S.Field placeholder={'Subject'} />
            <S.Field placeholder={'Message'} as={'textarea'} />
            <StyledButton type={'submit'} width = {'180px'} height='40px'>Send message</StyledButton>

          </S.ContactForm>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};


