import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Title = styled.h2`
  padding: 5px 10px;
  font-size: 21px;
  color: #42362b;
`;
