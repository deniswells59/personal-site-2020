import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => (props.black ? '#333' : '#fcfcfc')};
  font-family: 'Lato', sans-serif;
  font-size: 14px;
`;

export const Title = styled.p`
  color: ${props => (props.black ? '#333' : '#fcfcfc')};
  font-weight: ${props => (props.bold ? '800' : '400')};
  letter-spacing: 1px;
  font-family: 'Dosis', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  margin: 24px 0;
`;
