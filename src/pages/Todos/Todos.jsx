import { useEffect, useState } from "react";
import TodosList from "../../components/TodosList/TodosList";
import { fetchTodos } from "../../service/todosAPI";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((response) => setTodos(response));
  }, []);
  return (
    <div>
      <TodosList todos={todos} />
    </div>
  );
};

export default Todos;
