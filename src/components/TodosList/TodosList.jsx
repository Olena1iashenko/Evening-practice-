import { Link } from "react-router-dom";

const TodosList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`${item.id}`}> {item.todo}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TodosList;
