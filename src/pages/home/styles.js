import styled from 'styled-components';

const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
`;

export const Actions = styled.div`
  font-size: 15px;

  i {
    margin-right: 16px;
    cursor: pointer;
  }
`;

export default Container;
