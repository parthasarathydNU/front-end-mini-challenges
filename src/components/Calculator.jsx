import { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  margin: auto;
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalcStructure = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #D6E4E5;
  padding: 1.5rem 1rem;
`;

const MainInput = styled.input`
  background-color: black;
  border-radius: 1rem;
  height: 3rem;
  width: 98%;
  color: white;
  text-align: right;
`;

const Buttons = styled.section`
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin: 8px 0;
`;

const ButtonsRow = styled.section`
  display: flex;
  gap: 4px;
  justify-content: flex-start;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 1rem;
`;

const calcRowButtons = [
  ["Clear", "Del", "+-", "x**2"],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "/"],
  ["7", "8", "9", "-"],
  ["0", "x**y", "√", "*"],
  [".", "="],
];

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const onButtonClick = (e) => {
    alert(e.target.innerText)
    
    

  }

  return (
    <Container>
      <CalcStructure>
        <MainInput
          readOnly
          value={inputValue}
          type="text"
          name="inputFiled"
          id="inputField"
        />
        <Buttons>
          {calcRowButtons.map((row, index) => {
            return (
              <ButtonsRow key={`row-${index}`}>
                {row.map((button) => (
                  <Button key={`button-${button}`} onClick={onButtonClick}>{button}</Button>
                ))}
              </ButtonsRow>
            );
          })}
        </Buttons>
      </CalcStructure>
    </Container>
  );
}
