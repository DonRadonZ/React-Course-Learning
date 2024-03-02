import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoals } from "../App";

type CourseGoalListProps = {
    goals: CourseGoals[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    
    return (
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    )
}