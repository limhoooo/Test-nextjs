import styled from 'styled-components';

type Wrapper = {
  isBottomSheet: boolean;
};

export const Wrapper = styled.div<Wrapper>`
  position: fixed;
  width: 100%;
  height: 200px;
  transform: translateY(
    ${({ isBottomSheet }) => (isBottomSheet ? '0px' : '200px')}
  );

  transition: transform 650ms ease-out;
  bottom: 0;
  left: 0;
  background-color: #aaa;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const HeaderWrapper = styled.div`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

export const HandleBar = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;
