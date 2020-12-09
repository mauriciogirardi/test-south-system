import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #232129;
  border: 2px solid #232129;
  border-radius: 8px;
  padding: 10px;
  color: #666360;
  margin-top: 8px;

  > svg {
    margin-right: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00e0ff;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #00e0ff;
      color: #00e0ff;
    `}

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #eaeaea;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
    cursor: pointer;
  }

  span {
    background-color: #c53030;

    &::after {
      background-color: #c53030;
    }
  }
`;
