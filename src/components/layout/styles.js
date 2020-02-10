import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
`;

export const Body = styled.div`
  min-height: calc(100vh - 64px);
  display: grid;
  grid-template-columns: 240px 1fr;
`;

export const Content = styled.div`
  padding: 32px 48px;
`;

export default Container;
