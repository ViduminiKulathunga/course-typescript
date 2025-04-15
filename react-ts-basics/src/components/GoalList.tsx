import Goal from "./Goal";
import { type Goal as GoalType } from "../App";
import { InfoBox } from "./InfoBox";
import { ReactNode } from "react";

type GoalItem = {
  goal: GoalType[];
  onDeleteGoal: (id: number) => void;
};

export function GoalList({ goal, onDeleteGoal }: GoalItem) {
  if (goal.length === 0) {
    return <InfoBox mode="hint">You have no golas. Start adding some!</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goal.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collected a lot of goals. Don'y put too much on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goal.map((goalIem) => (
          <li key={goalIem.id}>
            <Goal id={goalIem.id} title={goalIem.title} onDelete={onDeleteGoal}>
              <p>{goalIem.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
}
