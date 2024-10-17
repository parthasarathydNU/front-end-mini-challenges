import { CloudSun } from "lucide-react";
import citiesData from "./data/mockCities.json";
import React, { useState, useEffect} from "react";
import WeatherTable from "./components/WeatherTable";
import { Title, Header, ContentWrapper, AppContainer } from "./ui/AppStyles";

function WeatherApp() {
  const [cities, setCitiesData] = useState(citiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const itemsPerPage = 5;

  useEffect(() => {

    // Apply sorting
    cities.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    setCitiesData(cities);
    setCurrentPage(1);
  }, [sortConfig]);  

  const paginatedCities = cities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <>
      <AppContainer>
        <ContentWrapper>
          <Header>
            <CloudSun size={48} color="#4299e1" />
            <Title>Weather App</Title>
          </Header>
          <WeatherTable sortConfig={sortConfig} onSort={handleSort} paginatedCitiesData={paginatedCities} />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default WeatherApp;
