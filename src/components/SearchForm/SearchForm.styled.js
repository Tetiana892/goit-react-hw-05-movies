import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 320px;
  margin: 30px auto;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px 2px;
  border: 0;
  border-bottom: 1px solid #5db09d;
  background-color: transparent;
  color: #42362b;
  font-size: 14px;

  transition: border 250ms linear;

  &:focus {
    outline: none;
    border-color: #42362b;
  }

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.17;
    color: #42362b;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: -2px;
  bottom: 4px;
  padding: 2px;
  width: 16px;
  height: 16px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  background-image: url(https://cdn-icons-png.flaticon.com/512/151/151773.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
