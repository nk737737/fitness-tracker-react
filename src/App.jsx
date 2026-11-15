import WorkoutCard from  './WorkoutCard.jsx'
import WorkoutList from './WorkoutList.jsx'
import {useState} from "react"; 

function App() {

  const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1)
  }

function handleRemove() {
  if (count > 0) {
    setCount(count - 1);
  }
  
}

  return (
    <>
    <h1>Fitness Tracker</h1>
     <WorkoutList title="My Workouts" workoutType="Running" workoutDuration={30} />
      <p>Total Workouts: {count}</p>
      <button onClick={handleClick}>Add Workout</button>
      <button onClick={handleRemove}>Remove Workout</button>
    </>
  )
}

export default App
