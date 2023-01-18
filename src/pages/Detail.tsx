import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
function Detail() {
  const navigate = useNavigate();
  const paramId = useParams().id;
  // console.log(paramId);

  const todos = useSelector((state: RootState) => state.todos);

  // 1. Main페이지에서 상세보기 버튼을 눌렀을때 item.id === paramId가 같으면 filer를 해라
  // 2. console.log(fillteredTodo) 찍어보면 클릭한 item.id 값이 배열로 들어온다.
  // 3. 우린 배열이 필요한것이 아니라 객체가 필요하다.그래서 [0]를 가져오겠다라는 뜻으로 적어준다.
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];
  // 4. console.log(fillteredTodo) 찍어보면 객체로 잘 들어온다.

  return (
    <StyledDetailBox>
      <h3>입력받은 ID와 일치하는 상세보기를 출력</h3>
      제목: {filteredTodo.title}
      <br />
      내용: {filteredTodo.contents}
      <br />
      완료여부: {filteredTodo.isDone.toString()}
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전 페이지로
      </button>
    </StyledDetailBox>
  );
}

export default Detail;

const StyledDetailBox = styled.div`
  background-color: lavender;
  padding: 30px;
  margin-bottom: 10px;
`;
