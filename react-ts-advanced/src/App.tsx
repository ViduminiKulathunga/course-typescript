import Input from "./components/Input";
import Button from "./Button2";
import Form, { type FormHandle } from "./components/Form";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your Name:" type="text" />
        <Input id="email" label="Your Emal:" type="text" disabled />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
