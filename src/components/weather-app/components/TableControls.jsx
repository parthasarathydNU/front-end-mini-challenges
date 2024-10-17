import React, { useState } from "react";
import {
  ControlsContainer,
  ControlsWrapper,
  SortContainer,
  Label,
  Select,
  Button,
  FilterForm,
  Input,
} from "../ui/ControlStyles";
import { Filter } from "lucide-react";

function TableControls({ sortConfig, onSort, filterConfig, onFilter}) {
  const [localFilterConfig, setLocalFilterConfig] = useState(filterConfig);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilterConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilter(localFilterConfig);
  };


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
          <Button onClick={() => onSort(sortConfig.key)}>
            {sortConfig.direction === "asc" ? "Ascending" : "Descending"}
          </Button>
        </SortContainer>
        <FilterForm onSubmit={handleFilterSubmit}>
          <Select
            name="attribute"
            value={localFilterConfig.attribute}
            onChange={handleFilterChange}
          >
            <option value="name">Name</option>
            <option value="temperature">Temperature</option>
            <option value="humidity">Humidity</option>
            <option value="pressure">Pressure</option>
          </Select>
          <Input
            type="text"
            name="value"
            value={localFilterConfig.value}
            onChange={handleFilterChange}
            placeholder="Filter value..."
          />
          <Button type="submit">
            <Filter size={16} />
            Filter
          </Button>
        </FilterForm>
      </ControlsWrapper>
    </ControlsContainer>
  );
}

export default TableControls;
