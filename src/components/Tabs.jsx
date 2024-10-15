import React from "react";
import useAppContext from "../context/AppContext";
import styled from "styled-components";

const StyledTabs = styled.section`
  display: flex;
  gap: 4px;
`;

const StyledTab = styled.button`
    background-color: white;
    border-radius: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

function Tabs() {
  const routerPaths = useAppContext();

  return (
    <StyledTabs>
      {routerPaths.map((routerPath) => (
        <StyledTab>
          <StyledLink href={routerPath.path}>{routerPath.path}</StyledLink>
        </StyledTab>
      ))}
    </StyledTabs>
  );
}

export default Tabs;
