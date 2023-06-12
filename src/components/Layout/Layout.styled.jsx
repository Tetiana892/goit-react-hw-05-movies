import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-height: 39px;
  padding: 10px 70px;
  color: #fff;
  background-color: #ddbea9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  padding: 0 10px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  position: relative;
  z-index: 20;

  transition: color 150ms linear;

  &:nth-of-type(2) {
    margin-left: 24px;
  }

  &:hover,
  &:focus {
    color: #42362b;
  }

  &.active {
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
      width: 100%;
      height: 55px;
      background-color: #42362b;
      border-radius: 2px;

      left: 0;
      bottom: -15px;

      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;
