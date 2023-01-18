import { v4 as uuidv4 } from "uuid";


export interface TodoType {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

// 1. action items
const ADD_TODO = "ADD_TODO" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const SWITCH_TODO = "SWITCH_TODO" as const;

// 2. action creators(1)
export const addTodo = (payload: TodoType) => {
  return {
    type: ADD_TODO,
    //id,title,content,isDone
    payload,
  };
};

// 2. action creators(2)
// id값이 uuid값이라서 string이다.
export const removeTodo = (payload: string) => {
  return {
    type: REMOVE_TODO,
    payload
  };
};
// 2. action creators(3)
export const switchTodo = (payload: string) => {
  return {
    type: SWITCH_TODO,
    payload
  };
};

// 액션 객체에 대한 타입 설정
// ReturnType --> 타입스크립트의 특정함수의 반환 타입을 추출해내는 제너릭 타입으로
// 이를 통해 interface 중복작성을 피할수 있다.
type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof switchTodo>;

// 리듀서에 전달 할 state에 대한 처리
// type newTodo = {
//   id: string;
//   title: string;
//   contents: string;
//   isDone: Boolean;
// };

// 3. initial State => reuder를 구성할 때
const inintialState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
];

// 4. reducer를 만들 것
const todos = (state = inintialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      // [...state, newTodo]
      return [...state, action.payload];
    case REMOVE_TODO:
      // state.filter((item) => item.id !== id);
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        //  if (item.id === id)
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

//5. reducer를 export
export default todos;
