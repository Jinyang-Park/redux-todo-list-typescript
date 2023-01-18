import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../modules/todos";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent } from "react";

export interface TodoType {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

function Input() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmitButtonClick = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();


    const newTodo: TodoType = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
  };

  const handleTitleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const handleContentsInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setContents(event.target.value);
  };
  return (
    <StyledInputBox>
      <form onSubmit={handleSubmitButtonClick}>
        <input onChange={handleTitleInputChange} value={title} type='text' />
        <input
          onChange={handleContentsInputChange}
          value={contents}
          type='text'
        />
        <button type='submit'>추가</button>
      </form>
    </StyledInputBox>
  );
}

export default Input;

const StyledInputBox = styled.div`
  background-color: aqua;
  padding: 20px;
`;
