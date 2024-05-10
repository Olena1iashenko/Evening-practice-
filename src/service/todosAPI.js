import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com/";
export const fetchTodos = async () => {
  const { data } = await axios.get("todos");
  return data.todos;
};
