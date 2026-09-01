import { IconFeed } from "../icons/IconFeed";
import { NavBarLink } from "../NavBarLink";
import { IconAccount } from "../icons/IconAccount";
import { IconInfo } from "../icons/IconInfo";
import { IconLogin } from "../icons/IconLogin";

export const NavBar = () => {
  return (
    <nav className="py-[17px] px-4 gap w-full bg-dark-gray rounded-t-lg h-[117px] sticky bottom-0">
      <ul className="flex items-center justify-between ">
        <li>
          <NavBarLink href="/" icon={<IconFeed />} content={"Feed"} />
        </li>
        <li>
          <NavBarLink href="/profile" icon={<IconAccount />} content={"Perfil"} />
        </li>
        <li>
          <NavBarLink href="/about-us" icon={<IconInfo />} content={"Sobre Nós"} />
        </li>
        <li>
          <NavBarLink href="/auth/logout" icon={<IconLogin />} content={"Sair"} />
        </li>
      </ul>
    </nav>
  );
};
