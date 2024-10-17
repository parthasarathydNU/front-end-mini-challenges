import { CloudSun } from "lucide-react";
import React, { useState } from "react";
import citiesData from "./data/mockCities.json";
import WeatherTable from "./components/WeatherTable";
import { Title, Header, ContentWrapper, AppContainer } from "./ui/AppStyles";

function WeatherApp() {
  const [cities, setCitiesData] = useState(citiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
          <WeatherTable cities={paginatedCities} />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default WeatherApp;
