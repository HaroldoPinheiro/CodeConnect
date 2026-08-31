import { Button } from "../../components/Button";
import { LogoCodeConnect } from "../../components/LogoCodeConnect";
import { Main } from "../../components/main";
import { Typography } from "../../components/Typography";

export const AboutUs = () => {
  return (
    <Main>
      <LogoCodeConnect variant="logoText" />
      <Button color="green">Publicar</Button>
      <img
        src="src/assets/images/celebro.png"
        alt="Imagem de um celerbro mecanico iluminado na cor verde"
        className="w-full"
      />
      <Typography variant="h1" color="green">
        Bem-Vindo ao CodeConnect!
      </Typography>
      <Typography variant="h2" color="gray">
        Onde a comunidade e o código se unem!
      </Typography>
      <Typography variant="p" color="white">
        No coração da revolução digital está a colaboração. CodeConnect nasceu
        da visão de criar um espaço onde desenvolvedores, programadores e
        entusiastas da tecnologia podem se conectar, e colaborar de maneira
        inigualável. Somos uma comunidade global apaixonada por código e estamos
        comprometidos em oferecer um ambiente inclusivo e inspirador para todos
        os níveis de habilidade.
      </Typography>
      <Typography variant="h3" color="gray">
        Nossa Missão
      </Typography>
      <Typography variant="p" color="white">
        Na CodeConnect, acreditamos que a colaboração é a essência da inovação.
        Nossa missão é fornecer uma plataforma onde os mentes criativas podem se
        unir, compartilhar conhecimento, e desenvolver projetos extraordinários.
        Quer você seja um novato ansioso para aprender ou um veterano
        experiente, você encontrará aqui um lar para suas aspirações
        tecnológicas.
      </Typography>
      <img
        src="src/assets/images/homem-computador.png"
        alt="Imagem de um homem usando um computador"
        className="w-full"
      />
      <Typography variant="h3" color="gray">
        Junte-se a Nós!
      </Typography>
      <Typography variant="p" color="white">
        Estamos animados para ter você conosco nesta jornada empolgante.
        Junte-se à nossa comunidade vibrante e descubra o poder da colaboração
        no mundo do código.
      </Typography>
      <LogoCodeConnect variant="logo" />
      <Typography variant="h3" color="mediumGray">
        Juntos, vamos transformar ideias em inovações e moldar o futuro digital.
      </Typography>
    </Main>
  );
};
