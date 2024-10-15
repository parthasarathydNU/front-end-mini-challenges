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

  const [inputValue, setInputValue] = useState(0);
  const [sourceValue, setSourceValue] = useState(undefined);
  const [targetValue, setTargetValue] = useState(undefined);
  const [operation, setOperation] = useState(undefined);


  const numberClicked = (number) => {
    
    const currentNumber = parseInt(inputValue);
    const newNumber = currentNumber * 10 + number;
    setInputValue(newNumber);

  }

  const actionClicked = action => {

    // alert("Action clicked")
    switch(action) {
      case 'Clear' :
        setInputValue(0);
        break;
      case 'Del' : 
        const currentInputValue = inputValue;

        if(currentInputValue > 0){
          setInputValue(Math.floor(currentInputValue/10));
        }

        break;
      case '+-' :
        setInputValue(-inputValue)
        break;
        
    }
  }

  const onButtonClick = (e) => {

    const selectedButton = e.target.innerText;
    // We handle the logic here differently based on the selected buttons
    /**
     * = triggers the execution
     * +, /, - and * set the operation, x**2 also sets the operation and sets target as well
     * x**y sets the operation and waits for target
     * √ root sets the operation
     * Clear clears the values in the input and any other operations and target numbers
     * Del removes the unit;s digit from the number in the input
     * 
     * +-, changes the sign of the input
     * 
     */

    // Is this a number ? 
    if(isNaN(parseInt(selectedButton))){
      actionClicked(selectedButton);
      return;
    }

    // alert("This is a numebr");
    numberClicked(parseInt(selectedButton));

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
