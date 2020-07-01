import styled from 'styled-components';

const ParallaxWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease;

  /* fallback for old browsers */
  background: #000046;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, #000046, #1cb5e0);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, #000046, #1cb5e0);
`;

export default ParallaxWrapper;
