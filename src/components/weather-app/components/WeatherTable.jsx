import React from "react";
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/TableStyles";
function WeatherTable({ paginatedCitiesData }) {
  const columns = Object.keys(paginatedCitiesData[0]);

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            {columns.map((key) => (
              <TableHeader key={key} sortable>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </TableHeader>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {paginatedCitiesData.map((city) => (
            <TableRow key={city.id}>
              <TableCell>{city.id}</TableCell>
              <TableCell>{city.name}</TableCell>
              <TableCell>{city.temperature}°C</TableCell>
              <TableCell>{city.humidity}%</TableCell>
              <TableCell>{city.pressure} hPa</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default WeatherTable;
