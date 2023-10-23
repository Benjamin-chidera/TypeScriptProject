import React from "react";
import { Todo } from "./Model";
import { SingleTodo } from "./SingleTodo";

type todo = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = ({ todos, setTodos }: todo) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id}>
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};
