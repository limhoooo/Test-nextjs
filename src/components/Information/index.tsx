import React, { useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import Typography from '../styles/Typography';
import BottomSheet from '../BottomSheet';

const infoMenuList = ['Shop', 'Information', 'Company'];
export default function Information() {
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  const showBottomSheet = (item: string) => {
    window.location.hash = 'bottomsheet';
    changeIsBottomSheet(true);
  };
  const changeIsBottomSheet = (flag: boolean) => {
    setIsBottomSheet(flag);
  };
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
        {infoMenuList.map(item => (
          <S.Information key={item} onClick={() => showBottomSheet(item)}>
            <Typography tag="p" typo="text_s">
              {item}
            </Typography>
          </S.Information>
        ))}
        <S.InformationFooter>
          <Typography tag="p" typo="text_xs">
            &#169; 2023 Limhoooo Commerce
          </Typography>
        </S.InformationFooter>
      </S.InformationBox>
      <BottomSheet
        isBottomSheet={isBottomSheet}
        changeIsBottomSheet={changeIsBottomSheet}
      />
    </S.Wrapper>
  );
}
