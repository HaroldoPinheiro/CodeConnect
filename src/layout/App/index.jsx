import { Outlet } from "react-router";
import { NavBar } from "../../components/NavBar";
import { Main } from "../../components/main";

export const AppLayout = () => {
  return (
    <Main>
      <Outlet />
      <NavBar />
    </Main>
  );
};
