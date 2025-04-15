import Input from "./components/Input";
import Button from "./Button2";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name:" type="text" />
      <Input id="email" label="Your Emal:" type="text" disabled />
      <Container as={Button} onClick={() => {}} type="button">
        Click me!
      </Container>
    </main>
  );
}

export default App;
