import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsButton, ButtonsAll } from "./styled";
import {
  toggleHideDone,
  selectHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <ButtonsAll>
      <ButtonsButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania.
      </ButtonsButton>
      {!areTasksEmpty && (
        <>
          <ButtonsButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </ButtonsButton>
          <ButtonsButton
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </ButtonsButton>
        </>
      )}
    </ButtonsAll>
  );
};

export default Buttons;
