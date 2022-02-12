import React from 'react';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { SectionTechProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

import * as S from './styles';

export function SectionTech({ title, techIcons }: SectionTechProps) {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ id, title, image: { url, alternativeText } }) => (
            <S.Icon key={id}>
              <S.Icons
                src={getImageUrl(url)}
                alt={alternativeText}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
}
