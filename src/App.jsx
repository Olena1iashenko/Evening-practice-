import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";
import ToDo from "./pages/ToDo/ToDo";

//Plan
// Зробити перехід на нову сторінку використовуючи динамічний параметр

// 1. Додати роутер ва мейн
// 2.

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="todos/:todoId" element={<ToDo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
