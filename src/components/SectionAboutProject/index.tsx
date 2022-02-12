import React from 'react';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { SectionAboutProjectProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

import * as S from './styles';

export function SectionAboutProject({
  title,
  description,
  media: { url, alternativeText },
}: SectionAboutProjectProps) {
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image
            src={getImageUrl(url)}
            loading="lazy"
            alt={alternativeText}
          />
          <div>
            <Heading>{title}</Heading>
            <S.TextWrapper dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  );
}
