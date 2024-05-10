import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path="todos" element={<h2>ToDos</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
