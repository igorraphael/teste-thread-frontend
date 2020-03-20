import styled from 'styled-components';

export const TableContainer = styled.table`
margin-top: 20px;
width: 100%;
border-collapse: collapse;
border: 1px solid #eee;
border-bottom: 2px solid #0373fc;
tr {
   &:hover {
    background: #f4f4f4;
    td {
      color: #555;
    }
  }
}
th, td {
  color: #999;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
}
th {
  background: #0373fc;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  &.last {
    border-right: none;
  }
}
`;