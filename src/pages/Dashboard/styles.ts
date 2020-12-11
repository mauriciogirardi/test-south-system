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

export const Books = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListBooks = styled.section`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  margin-top: 50px;
  max-width: 200px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: 250px;
    object-position: top;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  padding: 10px;
  position: relative;
  flex: 1;

  h1 {
    font-size: 17px;
    margin-bottom: 40px;
  }

  > button {
    position: absolute;
    bottom: 10px;
  }
`;
