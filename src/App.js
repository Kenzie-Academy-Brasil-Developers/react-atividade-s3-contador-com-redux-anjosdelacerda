import Display from "./components/display";
import Renderer from "./components/renderer";
import { Container, Section } from "./components/styles/containers/style";
import { GlobalStyle } from "./components/styles/GlobalStyle/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Section>
          <Display />
          <Renderer />
        </Section>
      </Container>
    </>
  );
}

export default App;
