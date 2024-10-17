import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "./ui/Container";

const ProgressBarContainer = styled.div`
  width: 80%;
  height: 40px;
  background: grey;
  border-radius: 1rem;
  display: flex;
`;

const ProgressIndicator = styled.div`
  display: flex;
  background: pink;
  height: 100%;
  transition: width 0.199s linear;
  border-radius: 1rem;
`;

function ProgressBar() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let currentProgress = progress;
    let progressBarExpander = setInterval(() => {
        currentProgress+= 1;
        currentProgress %= 100;
        setProgress(currentProgress);
    }, 200);
  
    return () => {
      clearInterval(progressBarExpander);
    }
  })
  
  return (
    <Container>
      <ProgressBarContainer>
        <ProgressIndicator style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
    </Container>
  );
}

export default ProgressBar;
