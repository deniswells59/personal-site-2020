import styled from 'styled-components';

export const Text = styled.p`
  color: #fcfcfc;
  font-family: 'Lato', sans-serif;
`;

export const Title = styled.p`
  color: ${props => (props.black ? '#333' : '#fcfcfc')};
  font-weight: ${props => (props.bold ? '800' : '400')};
  letter-spacing: 1px;
  font-family: 'Dosis', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  margin: 1.6em 0;
`;
