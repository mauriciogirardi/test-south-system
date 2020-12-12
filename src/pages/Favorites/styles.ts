import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

  h1 {
    text-align: center;
  }
`;

export const Books = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: left;
  /* justify-content: space-around; */
  flex-wrap: wrap;
`;

export const ListBooks = styled.section`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 10px;
  margin-top: 20px;
  max-width: 200px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;

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
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button.detail {
    background-color: #6c9814;
    color: #fff;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 13px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#6c9814')};
    }
  }

  button.favorite {
    background-color: transparent;
    color: #febc3d;
    border: 0;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#febc3d')};
    }
  }
`;
