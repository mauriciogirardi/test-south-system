import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(90deg);
  }
  50%,100% {
    transform: rotate(0deg);
  }
`;

export const Container = styled.section`
  position: absolute;
  left: calc(50% + 130px);
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (max-width: 500px) {
    left: calc(50%);
  }
`;

export const BoxLodging = styled.section`
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #6c9814;
  animation: ${rotate} 0.3s linear infinite;
  border-radius: 50%;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #febc3d;
    border-radius: 50%;
  }

  div:nth-child(1) {
    top: -100%;
  }

  div:nth-child(2) {
    right: -100%;
  }

  div:nth-child(3) {
    bottom: -100%;
  }

  div:nth-child(4) {
    left: -100%;
  }
`;
