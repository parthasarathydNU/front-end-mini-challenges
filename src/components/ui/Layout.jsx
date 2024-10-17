import React from "react";
import styled from "styled-components";
import useAppContext from "../../context/AppContext";
import CardGrid from "./CardGrid";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Layout({ children }) {
  const routes = useAppContext();

  return (
    <Container>
      <header>React Mini Challenges</header>
      {!(window.location.pathname == "" || window.location.pathname == "/") && (
        <CardGrid
          cardsContent={[routes[0]]}
          clickHandler={() => window.location = "/"}
        />
      )}

      {children}
      <footer>Footer</footer>
    </Container>
  );
}

export default Layout;
