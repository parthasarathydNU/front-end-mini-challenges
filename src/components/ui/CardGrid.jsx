import React from "react";
import styled from "styled-components";
import { Calculator, Lightbulb, BarChart } from "lucide-react";

const CardGridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: ${props => props.offset ? 'absolute' : 'relative'};
  right: 0;
  gap: 1.5rem;
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #666;
  text-align: center;
`;

const getIcon = (element) => {
  switch (element) {
    case "Calculator":
      return <Calculator size={48} color="#3B82F6" />;
    case "TrafficLight":
      return <Lightbulb size={48} color="#EAB308" />;
    case "ProgressBar":
      return <BarChart size={48} color="#22C55E" />;
    default:
      return null;
  }
};

function CardGrid({ cardsContent, clickHandler }) {
  return (
    <CardGridDiv offset={!(window.location.pathname === "" || window.location.pathname === "/")}>
      {cardsContent.map((x) => (
        <Card onClick={(e) => clickHandler(x.path)}>{x.name}</Card>
      ))}
    </CardGridDiv>
  );
}

export default CardGrid;
