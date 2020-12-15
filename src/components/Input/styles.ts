import styled, { css } from 'styled-components';
import Tooltip from 'components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErred: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.inputBackground};
  border: 2px solid ${props => props.theme.colors.inputBackground};
  border-radius: 8px;
  padding: 10px;
  color: #666360;
  margin-top: 8px;

  > svg {
    margin-right: 16px;
  }

  ${props =>
    props.isErred &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #6c9814;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #6c9814;
      color: #6c9814;
    `}

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #eaeaea;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${props => props.theme.colors.white};
      -webkit-box-shadow: 0 0 0px 1000px
        ${props => props.theme.colors.inputBackground} inset;
    }
  }
`;

export const Error = styled(Tooltip)`
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

  @media (max-width: 500px) {
    margin-left: -20px;
  }
`;
