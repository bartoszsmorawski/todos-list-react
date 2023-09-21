import React from "react";
import { ButtonsButton, ButtonsAll, } from "./styled";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsAll>
    {tasks.length > 0 && (
      <>
        <ButtonsButton 
        onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </ButtonsButton>
        <ButtonsButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </ButtonsButton>
      </>
    )}
  </ButtonsAll>
);

export default Buttons;
