import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #FFF;
  border-bottom: 1px solid rgba(76,87,102,.1);
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  > img:first-child {
    object-fit: cover;
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 4px;
  }
  
  > img:last-child {
    width: 10px;
    margin-top: 2px;
    margin-left: 4px;
  }
  
  span {
    font-weight: 500;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
`;

export default Container;
