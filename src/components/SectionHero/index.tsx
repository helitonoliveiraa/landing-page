import React from 'react';

import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Logo } from 'components/Logo';
import { HeaderProps, Image } from 'types/api';
import { gaEvent } from 'utils/ga';

import { getImageUrl } from '@/utils/getImageUrl';

import * as S from './styles';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type SectionHeroProps = {
  logo: Image;
  header: HeaderProps;
};

export function SectionHero({
  logo,
  header: { title, description, button, media },
}: SectionHeroProps) {
  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonWrapper>
              <Button href={button.url} onClick={onClick} wide>
                {button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image src={getImageUrl(media.url)} alt={media.alternativeText} />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
