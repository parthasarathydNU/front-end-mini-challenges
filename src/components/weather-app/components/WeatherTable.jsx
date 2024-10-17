import React from "react";
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/TableStyles";
import { ArrowUpDown } from "lucide-react";

function WeatherTable({ paginatedCitiesData, onSort, sortConfig }) {
  const columns = Object.keys(paginatedCitiesData[0]).slice(1);

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return (
        <ArrowUpDown
          size={16}
          style={{
            marginLeft: "4px",
            transform:
              sortConfig.direction === "asc" ? "rotate(180deg)" : "none",
          }}
        />
      );
    }
    return null;
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            {columns.map((key) => (
              <TableHeader key={key} onClick={() => onSort(key)} sortable>
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {renderSortIcon(key)}
              </TableHeader>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {paginatedCitiesData.map((city) => (
            <TableRow key={city.id}>
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
