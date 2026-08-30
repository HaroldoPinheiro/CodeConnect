import { Button } from "./components/Button";
import { Main } from "./components/main";
import { LogoCodeConnect } from "./components/LogoCodeConnect";

function App() {
  return (
    <Main>
      <LogoCodeConnect />
      <Button color="green">Publicar</Button>
    </Main>
  );
}

export default App;
