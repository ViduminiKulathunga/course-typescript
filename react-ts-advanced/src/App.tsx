import Input from "./components/Input";
import Button from "./Button2";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name:" type="text" />
      <Input id="email" label="Your Emal:" type="text" disabled />
      <p>
        <Button>Submit</Button>
      </p>
      <p>
        <Button href="https://www.google.com/" target="_blank">Google</Button>
      </p>
    </main>
  );
}

export default App;
