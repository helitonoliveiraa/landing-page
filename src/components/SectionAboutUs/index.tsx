import React from 'react';

import { Container } from 'components/Container';
import { Heading } from 'components/Heading';
import { ProfileCard } from 'components/ProfileCard';

import { SectionAboutUsProps } from '@/types/api';

import * as S from './styles';

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ id, name, role, description, photo, socialLinks }) => (
        <ProfileCard
          key={id}
          name={name}
          role={role}
          photo={photo}
          socialLinks={socialLinks}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
);

export default SectionAboutUs;
