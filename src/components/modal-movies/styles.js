import styled from 'styled-components';
import { Form } from 'antd';

const { Item } = Form;

const Container = styled.div``;

export const FormItem = styled(Item)`
  margin-bottom: 16px;
  
  .ant-col.ant-form-item-label {
    font-weight: 600;
  }
  
  .ant-calendar-picker {
    width: 100%;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default Container;
