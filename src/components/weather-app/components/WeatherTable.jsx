import React from "react";
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/TableStyles";
function WeatherTable() {


  return (
    <TableContainer>
        <StyledTable>
            <TableHead>
            <tr>
            {['name', 'temperature', 'humidity', 'pressure'].map((key) => (
              <TableHeader
                key={key}
                sortable
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
            
              </TableHeader>
            ))}
          </tr>
            </TableHead>
        </StyledTable>
    </TableContainer>
  );
}

export default WeatherTable;
