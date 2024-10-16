import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
  color: #4a5568;
`;

export const TableHead = styled.thead`
  background-color: #f7fafc;
`;

export const TableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: ${props => props.sortable ? 'pointer' : 'default'};

  &:hover {
    background-color: ${props => props.sortable ? '#edf2f7' : 'inherit'};
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f7fafc;
  }

  &:hover {
    background-color: #edf2f7;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;
