import { shade } from 'polished';
import styled from 'styled-components';

interface BuyProps {
  isBuy: boolean;
}

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  cursor: pointer;
`;

export const Modal = styled.main`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 8px;
  padding: 40px;
  max-width: 900px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  height: 470px;
`;

export const Buy = styled.div<BuyProps>`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  height: ${props => (props.isBuy ? '350px' : '300px')};

  img {
    width: 200px;
    height: 300px;
  }

  a {
    background-color: #6c9814;
    font-weight: 500;
    display: block;
    padding: 5px 10px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#6c9814')};
    }
  }
`;

export const Content = styled.div`
  margin-left: 16px;
  overflow-x: auto;

  button {
    background-color: transparent;
    border: 0;
    color: ${props => props.theme.colors.white};
    font-size: 25px;
    transition: opacity 0.2s;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      opacity: 0.5;
    }
  }

  h1 {
    font-size: 28px;
    text-align: left;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }

  article {
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    margin-right: 16px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.white};
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Preview = styled.div`
  text-align: right;
  margin-right: 16px;
  a {
    display: inline-block;
    background-color: #c53030;
    padding: 5px 20px;
    border-radius: 30px;
    transition: background-color 0.2s;
    margin-top: 15px;

    &:hover {
      background-color: ${shade(0.2, '#c53030')};
    }
  }
`;

export const Categories = styled.div`
  margin-top: 15px;
  margin-right: 16px;

  h4 {
    border-bottom: 1px solid ${props => props.theme.colors.white};
    margin-bottom: 10px;
  }

  small {
    background-color: ${props => props.theme.colors.secondary};
    padding: 5px 10px;
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;
