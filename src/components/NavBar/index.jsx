import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { IconAccount } from "../icons/IconAccount";
import { IconFeed } from "../icons/IconFeed";
import { IconInfo } from "../icons/IconInfo";
import { IconLogin } from "../icons/IconLogin";
import { LogoCodeConnect } from "../../components/LogoCodeConnect";
import { NavBarLink } from "../NavBarLink";

export const NavBar = () => {
  return (
    <nav
      className={`py-[17px] px-4 w-screen bg-dark-gray rounded-t-lg h-[117px] sticky bottom-0 md:py-10 md:px-15 md:h-[169px] lg:py-10 lg:px-4 lg:rounded-lg  lg:w-[177px] lg:h-auto lg:static`}
    >
      <ul className="flex items-center justify-between lg:flex-col lg:gap-10">
        <Container className={"hidden gap-20 lg:flex"}>
          <LogoCodeConnect variant="logoText" />
          <Button color="green">Publicar</Button>
        </Container>
        <li>
          <NavBarLink href="/" icon={<IconFeed />} content={"Feed"} />
        </li>
        <li>
          <NavBarLink
            href="/profile"
            icon={<IconAccount />}
            content={"Perfil"}
          />
        </li>
        <li>
          <NavBarLink
            href="/about-us"
            icon={<IconInfo />}
            content={"Sobre Nós"}
          />
        </li>
        <li>
          <NavBarLink
            href="/auth/logout"
            icon={<IconLogin />}
            content={"Sair"}
          />
        </li>
      </ul>
    </nav>
  );
};
