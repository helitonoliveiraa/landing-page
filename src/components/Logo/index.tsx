import { getImageUrl } from '@/utils/getImageUrl';
import React from 'react';
import { Image } from 'types/api';

import * as S from './styles';

type LogoProps = Image;

export function Logo({ alternativeText, url }: LogoProps) {
  return <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />;
}
