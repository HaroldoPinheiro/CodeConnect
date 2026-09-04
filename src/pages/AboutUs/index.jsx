import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { LogoCodeConnect } from "../../components/LogoCodeConnect";
import { Main } from "../../components/main";
import { NavBar } from "../../components/NavBar";
import { Typography } from "../../components/Typography";

export const AboutUs = () => {
  const cerebroMobile = "src/assets/images/celebro.png";
  const cerebroTablet = "src/assets/images/celebro-tablet.png";
  const cerebroDesktop = "src/assets/images/celebro-desktop.png";

  return (
    <>
      <Main>
        <Container className={"gap-14 lg:w-[995px] lg:pb-20"}>
          <Container className={"gap-12"}>
            <Container
              className={"gap-10 md:flex-row md:justify-between lg:hidden"}
            >
              <LogoCodeConnect variant="logoText" />
              <Button color="green">Publicar</Button>
            </Container>
            <picture>
              <source media="(max-width: 640px)" srcSet={cerebroMobile} />
              <source media="(max-width: 1024px)" srcSet={cerebroTablet} />
              <img
                src={cerebroDesktop}
                alt="Imagem de um celerbro mecanico iluminado na cor verde"
                className="w-full h-[397px] object-cover"
              />
            </picture>
          </Container>
          <Container className={"gap-4"}>
            <Typography variant="h1" color="green">
              Bem-Vindo ao CodeConnect!
            </Typography>
            <Typography variant="h2" color="gray">
              Onde a comunidade e o código se unem!
            </Typography>
          </Container>
          <Typography variant="p" color="white">
            No coração da revolução digital está a colaboração. CodeConnect
            nasceu da visão de criar um espaço onde desenvolvedores,
            programadores e entusiastas da tecnologia podem se conectar, e
            colaborar de maneira inigualável. Somos uma comunidade global
            apaixonada por código e estamos comprometidos em oferecer um
            ambiente inclusivo e inspirador para todos os níveis de habilidade.
          </Typography>
          <Container className={"gap-6 md:flex-row"}>
            <Container className={"gap-6"}>
              <Typography variant="h3" color="gray">
                Nossa Missão
              </Typography>
              <Typography variant="p" color="white">
                Na CodeConnect, acreditamos que a colaboração é a essência da
                inovação. Nossa missão é fornecer uma plataforma onde os mentes
                criativas podem se unir, compartilhar conhecimento, e
                desenvolver projetos extraordinários. Quer você seja um novato
                ansioso para aprender ou um veterano experiente, você encontrará
                aqui um lar para suas aspirações tecnológicas.
              </Typography>
            </Container>
            <img
              src="src/assets/images/homem-computador.png"
              alt="Imagem de um homem usando um computador"
              className="w-full "
            />
          </Container>
          <Container className={"gap-6"}>
            <Typography variant="h3" color="gray">
              Junte-se a Nós!
            </Typography>
            <Typography variant="p" color="white">
              Estamos animados para ter você conosco nesta jornada empolgante.
              Junte-se à nossa comunidade vibrante e descubra o poder da
              colaboração no mundo do código.
            </Typography>
          </Container>
          <Container className={"gap-4 md:flex-row"}>
            <LogoCodeConnect variant="logo" />
            <Typography variant="h3" color="mediumGray">
              Juntos, vamos transformar ideias em inovações e moldar o futuro
              digital.
            </Typography>
          </Container>
        </Container>
        <NavBar />
      </Main>
    </>
  );
};
