import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkProps {
  selected: boolean;
}

interface Mobile {
  menuMobile: boolean;
}

export const Container = styled.aside<Mobile>`
  background-color: #28262e;
  grid-area: ASIDE;
  height: 100vh;

  @media (min-width: 600px) {
    > button {
      display: none;
    }
  }

  @media (max-width: 500px) {
    z-index: 100;
    position: relative;
    height: ${props => (props.menuMobile ? '400px' : '100px')};

    > button {
      border: 0;
      background-color: transparent;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 40px 16px;

  img {
    height: 60px;
    width: 60px;
    object-fit: cover;
  }

  h1 {
    width: 100px;
    margin-left: 16px;
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

export const Content = styled.ul<Mobile>`
  margin-left: 16px;

  button {
    background-color: transparent;
    border: 0;
    display: flex;

    & + button {
      margin-top: 10px;
    }
  }

  @media (max-width: 500px) {
    max-width: 250px;
    margin-top: 50px;
    display: ${props => (props.menuMobile ? 'block' : 'none')};
  }
`;

export const LinkMenu = styled(Link)<LinkProps>`
  align-items: center;
  display: flex;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.2s;

  ${props =>
    props.selected &&
    css`
      color: #77af07;

      svg {
        color: #fea03f;
      }
    `}

  > svg {
    font-size: 20px;
    margin-right: 8px;
  }

  &:hover {
    color: #77af07;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
