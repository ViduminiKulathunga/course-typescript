import { useState } from "react";
import Goal from "./components/Goal";
import IMG from "./assets/goals.jpg";
import { Header } from "./components/Header";
import { GoalList } from "./components/GoalList";
import { NewGoal } from "./components/NewGoal";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goal, setGoal] = useState<Goal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoal((prev) => {
      const newGoal: Goal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoal((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: IMG, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalList goal={goal} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
