import styled from 'styled-components';


export const PaginationContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.disabled ? '#cbd5e0' : '#4299e1'};
  color: white;
  border: none;
  border-radius: ${props => props.disabled ? '0.25rem' : '0'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  &:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &:hover:not(:disabled) {
    background-color: #3182ce;
  }
`;

export const PaginationInfo = styled.span`
  padding: 0.5rem 1rem;
  background-color: #edf2f7;
  color: #4a5568;
`;

