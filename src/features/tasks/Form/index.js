import { StyledForm, Input, Button, } from "./styled";
import { useState, useRef } from "react";

const Form = ({addNewTask}) => {
const [newTaskContent, setNewTaskContent] = useState("");
const inputRef = useRef(null);

const onFormSubmit = (event) => {
    event.preventDefault();

const trimedNewTaskContent = newTaskContent.trim();

    if(!trimedNewTaskContent) {
      return;
}

addNewTask(trimedNewTaskContent);
setNewTaskContent("");
inputRef.current.focus();
};


  return (
    <StyledForm onSubmit ={onFormSubmit} >
      <Input
      ref={inputRef}
      value= {newTaskContent}
       placeholder="Co jest do zrobienia?" 
       onChange={({ target }) => setNewTaskContent(target.value)}
       />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
export default Form;