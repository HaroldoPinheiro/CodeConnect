import { Outlet } from "react-router";
import { NavBar } from "../../components/NavBar";
import { Main } from "../../components/main";

export const App = () => {
  return (
    <Main>
      <Outlet />
      <NavBar />
    </Main>
  );
};
