import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "./ui/Container";

const TrafficLightBox = styled.section`
  background-color: black;
  border-radius: 1rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem 1rem;
`;

const TrafficLightCircle = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
`;

function TrafficLight() {
  const [flash, setFlash] = useState([1, 0, 0]);
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    let currentLightIndex = 0;

    const lightsInterval = setInterval(() => {
      // console.log("do something");

      currentLightIndex = (currentLightIndex + 1) % 3;

      const newFlash = [0, 0, 0];

      newFlash[currentLightIndex] = 1;

      setFlash(newFlash);
      setCountDown(4);
    }, 3000);

    const countDownInterval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    }, 1001);

    return () => {
      clearInterval(lightsInterval);
      clearInterval(countDownInterval);
    };
  }, []);

  return (
    <Container>
      <TrafficLightBox>
        <TrafficLightCircle
          style={{ backgroundColor: flash[0] ? "red" : "grey" }}
        />
        <TrafficLightCircle
          style={{ backgroundColor: flash[1] ? "yellow" : "grey" }}
        />
        <TrafficLightCircle
          style={{ backgroundColor: flash[2] ? "green" : "grey" }}
        />
      </TrafficLightBox>
      <span>&nbsp;Next light in {countDown}</span>
    </Container>
  );
}

export default TrafficLight;
