import Goal from "./Goal";
import { type Goal as GoalType } from "../App";

type GoalItem = {
  goal: GoalType[];
  onDeleteGoal: (id: number) => void;
};

export function GoalList({ goal, onDeleteGoal }: GoalItem) {
  return (
    <ul>
      {goal.map((goalIem) => (
        <li key={goalIem.id}>
          <Goal id={goalIem.id} title={goalIem.title} onDelete={onDeleteGoal}>
            <p>{goalIem.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}
