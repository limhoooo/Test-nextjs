import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import Typography from '../styles/Typography';
export default function Information() {
  return (
    <S.Wrapper>
      <Image
        src={'/images/logo.png'}
        alt="logo image"
        width={105}
        height={18}
      />
      <S.Div>
        <Typography tag="p" typo="text_s">
          Phosf Iuorescently engage worldwide method process shopping.
        </Typography>
      </S.Div>
      <S.InformationBox>
        <S.Information>
          <Typography tag="p" typo="text_s">
            Shop
          </Typography>
        </S.Information>
        <S.Information>
          <Typography tag="p" typo="text_s">
            Information
          </Typography>
        </S.Information>
        <S.Information>
          <Typography tag="p" typo="text_s">
            Company
          </Typography>
        </S.Information>
        <S.InformationFooter>
          <Typography tag="p" typo="text_xs">
            &#169; 2023 Limhoooo Commerce
          </Typography>
        </S.InformationFooter>
      </S.InformationBox>
    </S.Wrapper>
  );
}
