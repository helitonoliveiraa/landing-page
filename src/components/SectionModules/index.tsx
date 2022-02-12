import React from 'react';

import { CardModule } from '@/components/CardModule';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { SectionModulesProps } from '@/types/api';

import * as S from './styles';

export function SectionModules({ title, modules }: SectionModulesProps) {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {modules.map(({ id, title, subTitle, description }) => (
          <CardModule key={id} title={title} subTitle={subTitle}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardModule>
        ))}
      </S.Content>
    </Container>
  );
}
