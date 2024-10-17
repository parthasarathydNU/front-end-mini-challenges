import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
  margin-left: 1rem;
`;
