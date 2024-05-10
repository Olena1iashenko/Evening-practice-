import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="todos" element={<Todos/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
