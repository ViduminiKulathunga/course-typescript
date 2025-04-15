import Goal from "./components/Goal";
import IMG from "./assets/goals.jpg";
import { Header } from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{ src: IMG, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <Goal title="React Typescript">
        <p>Learn from ground up.</p>
      </Goal>
    </main>
  );
}
