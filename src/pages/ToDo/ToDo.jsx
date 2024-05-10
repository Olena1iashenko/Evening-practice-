import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleTodo } from "../../service/todosAPI";

const ToDo = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState("");
  useEffect(() => {
    const getTodo = async () => {
      const data = await fetchSingleTodo(todoId);
      setTodo(data);
    };

    getTodo();
  }, [todoId]);

  return <div>{todo.todo}</div>;
};

export default ToDo;
