import React from "react";
import styled from "styled-components";
import useAppContext from "../context/AppContext";
import CardGrid from "./ui/CardGrid";
import Container from "./ui/Container";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

function Welcome() {
  const routerPaths = useAppContext();

  const handleCardClick = (path) => {
    window.location = path;
  };

  return (
    <Container>
      <Title>Welcome to My React Web Apps Demo</Title>
      <CardGrid cardsContent={routerPaths} clickHandler={handleCardClick} />
    </Container>
  );
}

export default Welcome;
