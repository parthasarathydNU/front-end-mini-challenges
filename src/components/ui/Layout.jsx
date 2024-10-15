import React from "react";
import styled from 'styled-components'
import Tabs from "../Tabs";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function Layout({ children }) {


  return (
    <Container>
      <header>React Mini Challenges</header>
      <Tabs />
      {children}
      <footer>Footer</footer>
    </Container>
  );
}

export default Layout;
