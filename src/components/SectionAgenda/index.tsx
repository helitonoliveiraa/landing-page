import React from 'react';

import { Container } from 'components/Container';
import { Heading } from 'components/Heading';

import { SectionAgendaProps } from '@/types/api';

import * as S from './styles';

export function SectionAgenda({ title, description }: SectionAgendaProps) {
  return (
    <Container id="agenda">
      <Heading reverseColor>{title}</Heading>
      <S.TextWrapper dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
}
