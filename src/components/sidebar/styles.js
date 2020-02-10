import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFF;
  width: 100%;
  border-right: 1px solid rgba(76,87,102,.1);
`;

export const Title = styled.div`
  font-weight: 600;
  padding: 12px 24px;
  margin-top: 8px;
  margin-bottom: 4px;
`;

export const List = styled.ul`
  li {
    cursor: pointer;
    padding: 12px 24px;
    font-weight: 500;
    
    &:hover {
      background-color: rgba(0, 0, 0, .1);      
    }
    
    &.active {
      color: #FFF;
      background-color: #1890ff;
    }
  }
`;

export default Container;
