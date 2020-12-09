import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

  form {
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;

    button {
      height: 44px;
      width: 120px;
      border: 0;
      border-radius: 0 8px 8px 0;
      background-color: #6c9814;
      color: #fff;
      font-weight: 500;
      margin-top: 7px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#6c9814')};
      }
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;
