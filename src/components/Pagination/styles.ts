import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  ul {
    display: flex;

    li {
      align-items: center;
      border: 1px solid ${props => props.theme.colors.white};
      color: inherit;
      display: flex;
      height: 30px;
      justify-content: center;
      min-width: 30px;
      width: 30px;

      button {
        background-color: transparent;
        border: 0;
        color: ${props => props.theme.colors.white};
      }
    }
  }
`;
