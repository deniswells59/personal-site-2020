import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 4em 6em 4em;
  min-height: 100vh;
  min-width: 400px;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 3em 10px 6em 10px;
  }
`;

export default Wrapper;
