import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import Header from './Header';

type Props = {
  isBottomSheet: boolean;
  changeIsBottomSheet: Function;
};

export default function BottomSheet({
  isBottomSheet,
  changeIsBottomSheet,
}: Props) {
  const sheet = useRef<HTMLDivElement>(null);
  let startY = 0;
  const handleTouchStart = (e: TouchEvent) => {
    startY = e.touches[0].clientY;
  };
  const handleTouchMove = (e: TouchEvent) => {
    document.body.style.overflowY = 'hidden';
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (startY < e.changedTouches[0].clientY) {
      changeIsBottomSheet(false);
    }
    document.body.style.overflowY = 'auto';
  };
  useEffect(() => {
    sheet.current!.addEventListener('touchstart', handleTouchStart);
    sheet.current!.addEventListener('touchmove', handleTouchMove);
    sheet.current!.addEventListener('touchend', handleTouchEnd);
  }, []);
  return (
    <S.Wrapper ref={sheet} isBottomSheet={isBottomSheet}>
      <Header />
    </S.Wrapper>
  );
}
