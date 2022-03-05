import React from 'react';

import { Button } from '@/components/Button';
import { pricingBox } from '@/types/api';
import { gaEvent } from '@/utils/ga';

import * as S from './styles';

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' });

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallment,
  benefits,
  discount,
  button: { label, url },
}: pricingBox) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> {priceInstallment}
      </S.DiscountPrice>
    </S.Prices>

    <S.BenefitsBox dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={url} onClick={onClick} withPrice>
      <p>{label}</p>
      <div>
        <S.ButtonFullPrice>{totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>{discount}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
);

export default PricingBox;
