import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeTodo, switchTodo } from "../modules/todos";
import { RootState } from '../config/configStore';

interface TodoListProps {
 isActive: boolean;
}
export default function TodoList({ isActive }:TodoListProps ) {
  // store에 있는 todos를 가지고 옴
  const todos = useSelector((state:RootState) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   console.log(todos);
  const handleDeleteButtonClick = (id:string) => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id:string) => {
    dispatch(switchTodo(id));
  };
  return (
    <StyledListBox>
      <h4>{isActive ? "해야할 일" : "완료된 일"}</h4>
      {todos
        // item.isDone이 true이면 isActive가 반대로 바뀌니깐 isActive false이므로 완료된 일
        // item.isDone이 false이면 isActive가 반대로 바뀌니깐 isActive true이므로 해야할 일
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? "완료" : "취소"}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>
                삭제
              </button>
              <br />
              <br />
              <button onClick={() => navigate(`/${item.id}`)}>상세보기</button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

const StyledListBox = styled.div`
  background-color: beige;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: #f4d7ef;
  padding: 10px;
  margin: 5px;
`;
