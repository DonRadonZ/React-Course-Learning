import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoals } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals: CourseGoals[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint" severity="low">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }  

  let warningBox: ReactNode;

  if (goals.length >= 5) { 
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
        {warningBox}
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
      </>
    )
}