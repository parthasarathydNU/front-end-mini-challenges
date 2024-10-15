import React from "react";
import useAppContext from "../context/AppContext";
import styled from "styled-components";

const StyledTabs = styled.section`
  display: flex;
  gap: 4px;
`;

const StyledTab = styled.button`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid grey;
  height: 3rem;
  width: 10rem;
  cursor: pointer;
`;

function Tabs() {
  const routerPaths = useAppContext();

  const handleTabClick = (tab) => {
    window.location = tab;
  };

  return (
    <StyledTabs>
      {routerPaths.map((routerPath) => (
        <StyledTab onClick={() => handleTabClick(routerPath.path)}>
          {routerPath.path}
        </StyledTab>
      ))}
    </StyledTabs>
  );
}

export default Tabs;
