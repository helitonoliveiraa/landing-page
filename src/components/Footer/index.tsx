import React from 'react';

import { Container } from '@/components/Container';
import { FooterProps } from '@/types/api';

import * as S from './styles';

const Footer = ({ description }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  </S.Wrapper>
);

export default Footer;
