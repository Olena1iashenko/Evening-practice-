import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>Layout</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">ToDos</Link>
      </nav>
      <Outlet />
    </>
  );
};
