import React from 'react';
import { FaDribbble, FaTwitter } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

import { Author } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

import * as S from './styles';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribble: <FaDribbble />,
};

type ProfileCardProps = Omit<Author, 'id'>;

export function ProfileCard({
  name,
  role,
  photo: { url, alternativeText },
  socialLinks,
  description,
}: ProfileCardProps) {
  return (
    <S.Card key={name}>
      <S.Image src={getImageUrl(url)} loading="lazy" alt={alternativeText} />

      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map(({ id, title, url }) => (
          <S.Link key={id}>
            <a href={url} title={title}>
              {icons[title.toLowerCase()]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
}
