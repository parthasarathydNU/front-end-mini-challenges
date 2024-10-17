import React from "react";
import styled from "styled-components";
import useAppContext from "../context/AppContext";
import CardGrid from "./ui/CardGrid";
import Container from "./ui/Container";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem;
`;

function Welcome() {
  const routerPaths = useAppContext();

  const handleCardClick = (path) => {
    window.location = path;
  };

  return (
    <Container>
      <CardGrid cardsContent={routerPaths} clickHandler={handleCardClick} />
      <Title>Welcome to My React Web Apps Demo</Title>
    </Container>
  );
}

export default Welcome;
