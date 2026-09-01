import { NavLink } from "react-router";

export const NavBarLink = ({ icon, content, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${isActive ? "text-white" : "text-medium-gray"}
        py-4 px-2 flex flex-col items-center gap-2
        text-[18px] leading-[150%]`
      }
    >
      <>
        {icon}
        {content}
      </>
    </NavLink>
  );
};
