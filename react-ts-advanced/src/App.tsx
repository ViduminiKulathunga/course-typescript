import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name:" type="text" />
      <Input id="email" label="Your Emal:" type="text" disabled />
    </main>
  );
}

export default App;
