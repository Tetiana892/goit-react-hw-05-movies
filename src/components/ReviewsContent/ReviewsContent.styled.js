import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  margin: -30px;
`;

export const Item = styled.li`
  position: relative;
  margin: 30px;
  padding: 25px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
  line-height: 1.35;
  color: #42362b;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextBold = styled.span`
  position: absolute;
  top: -10px;
  left: 10;
  padding: 4px 10px;
  font-weight: 700;
  background-color: #42362b;
  color: #fff;
  border-radius: 2px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const TextTitle = styled.span`
  font-weight: 700;
  color: #f25c54;
`;
