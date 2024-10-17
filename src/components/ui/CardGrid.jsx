import React from "react";
import styled from "styled-components";
import { Calculator, Lightbulb, BarChart } from "lucide-react";

const CardGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: ${(props) => (props.offset ? "absolute" : "relative")};
  right: 0;
  gap: 1.5rem;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;

function CardGrid({ cardsContent, clickHandler }) {
  return (
    <CardGridDiv
      offset={
        !(window.location.pathname === "" || window.location.pathname === "/")
      }
    >
      {cardsContent.map((x) => (
        <Card onClick={(e) => clickHandler(x.path)}>{x.name}</Card>
      ))}
      {(window.location.pathname === "" ||
        window.location.pathname === "/") && (
        <StyledLink target={"_blank"} href="https://apigen.parthadhruv.com">
          <Card>{"Responsive Table"}</Card>
        </StyledLink>
      )}
    </CardGridDiv>
  );
}

export default CardGrid;
