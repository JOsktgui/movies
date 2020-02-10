import styled from 'styled-components';
import { Table } from 'antd';

const TableStyled = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: transparent;
  }

  .ant-table-tbody {
    background-color: #FFF;
  }
`;

export default TableStyled;
