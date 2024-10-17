import { CloudSun } from "lucide-react";
import citiesData from "./data/mockCities.json";
import React, { useState, useEffect } from "react";
import WeatherTable from "./components/WeatherTable";
import { Title, Header, ContentWrapper, AppContainer } from "./ui/AppStyles";
import TableControls from "./components/TableControls";
import PaginationControls from "./components/PaginationControls";

function WeatherApp() {
  const itemsPerPage = 5;
  const [cities, setCitiesData] = useState(citiesData);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filterConfig, setFilterConfig] = useState({ name: '', attribute: 'name', value: '' });


  useEffect(() => {
    let filteredCities = [...citiesData];

    // Apply filtering
    if (filterConfig.value) {
      filteredCities = filteredCities.filter(city => {
        const cityValue = city[filterConfig.attribute];
        if (typeof cityValue === 'string') {
          return cityValue.toLowerCase().includes(filterConfig.value.toLowerCase());
        } else if (typeof cityValue === 'number') {
          return cityValue === Number(filterConfig.value);
        }
        return false;
      });
    }

    // Apply sorting
    filteredCities.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    setCitiesData(filteredCities);
    setCurrentPage(1);
  }, [sortConfig, filterConfig]);


  const handleFilter = (newFilterConfig) => {
    setFilterConfig(newFilterConfig);
  };

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCities = cities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AppContainer>
        <ContentWrapper>
          <Header>
            <CloudSun size={48} color="#4299e1" />
            <Title>Weather App</Title>
          </Header>
          <TableControls onFilter={handleFilter} filterConfig={filterConfig} onSort={handleSort} sortConfig={sortConfig} />
          <WeatherTable
            sortConfig={sortConfig}
            onSort={handleSort}
            paginatedCitiesData={paginatedCities}
          />
          <PaginationControls 
            currentPage={currentPage} 
            totalItems={paginatedCities.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange} />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default WeatherApp;
