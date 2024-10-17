import React from "react";
import {
  ControlsContainer,
  ControlsWrapper,
  SortContainer,
  Label,
  Select,
} from "../ui/ControlStyles";

function TableControls({ sortConfig, onSort }) {
  return (
    <ControlsContainer>
      <ControlsWrapper>
        <SortContainer>
          <Label htmlFor="sortBy">Sort by: </Label>
          <Select
            id="sortBy"
            value={sortConfig.key}
            onChange={(e) => onSort(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="temperature">Temperature</option>
            <option value="humidity">Humidity</option>
            <option value="pressure">Pressure</option>
          </Select>
        </SortContainer>
      </ControlsWrapper>
    </ControlsContainer>
  );
}

export default TableControls;
