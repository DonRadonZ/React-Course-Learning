
// components
import CourseGoal from "./components/CourseGoal"
import Header from "./components/Header"
import goalsImg from './assets/goals.jpg'
import { useState } from "react"

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals,setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      };
      return [...prevGoals,newGoal]
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
