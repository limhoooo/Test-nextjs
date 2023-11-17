import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import Header from './Header';

type Props = {
  isBottomSheet: boolean;
  changeIsBottomSheet: Function;
  children: React.ReactNode;
};

export default function BottomSheet({
  isBottomSheet,
  changeIsBottomSheet,
  children,
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
      history.pushState(
        '',
        window.document.title,
        window.location.pathname + window.location.search,
      );
    }
    document.body.style.overflowY = 'auto';
  };
  return (
    <S.Wrapper
      ref={sheet}
      isBottomSheet={isBottomSheet}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Header />
      {children}
    </S.Wrapper>
  );
}
