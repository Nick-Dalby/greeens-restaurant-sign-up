import styled from 'styled-components';

export const Input = styled.input`
  border: 2px soild #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px 0;
  padding: 12px;
  width: 100%;

  &::focus {
    border-color: #38B000;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Error = styled.span`
  color: #38B000;
`;

export const Submit = styled.button`
  background: none;
  border: 2px solid #38B000;
  color: #38B000;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
