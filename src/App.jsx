import WorkoutList from './WorkoutList.jsx'
import {useState} from "react"; 

function App() {

  const [workouts, setWorkouts] = useState([
  { id: 1, type: "Running", duration: 30 },
  { id: 2, type: "Strength", duration: 45 },
  { id: 3, type: "Yoga", duration: 20 },
  { id: 4, type: "Walking", duration: 40 }

  ]);

function handleClick() {
    const newWorkout = {
      id: Date.now(),
      type: "Running",
      duration: 30
    };
    setWorkouts([...workouts, newWorkout]);
  }

function handleRemove() {
  if (workouts.length > 0) {
    setWorkouts (workouts.slice(0, -1));
  }
  
}

  return (
    <>
    <h1>Fitness Tracker</h1>
     <WorkoutList title="My Workouts" workouts={workouts} />
      <p>Total Workouts: {workouts.length}</p>
      <button onClick={handleClick}>Add Workout</button>
      <button onClick={handleRemove}>Remove Workout</button>
    </>
  )
}

export default App
