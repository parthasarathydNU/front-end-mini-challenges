import React from "react";
import CardGrid from "./CardGrid";
import styled from "styled-components";
import useAppContext from "../../context/AppContext";
import GithubCorner from 'react-github-corner';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Layout({ children }) {
  const routes = useAppContext();

  return (
    <Container>
      {!(window.location.pathname === "" || window.location.pathname === "/") && (
        <CardGrid
          cardsContent={[routes[0]]}
          clickHandler={() => window.location = "/"}
        />
      )}

      {children}
      <GithubCorner href="https://github.com/parthasarathydNU/front-end-mini-challenges" />
    </Container>
  );
}

export default Layout;
