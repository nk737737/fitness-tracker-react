import WorkoutList from './WorkoutList.jsx'
import WorkoutForm from './WorkoutForm.jsx'
import {useState} from "react"; 

function App() {

  const [workouts, setWorkouts] = useState([
  { id: 1, type: "Running", duration: 30 },
  { id: 2, type: "Strength", duration: 45 },
  { id: 3, type: "Yoga", duration: 20 },
  { id: 4, type: "Walking", duration: 40 }

  ]);

function handleAddWorkout (newWorkout) {
    setWorkouts([...workouts, newWorkout]);
    
  }

function handleRemove(id) {
  setWorkouts(workouts.filter((workout) => workout.id !== id));
  }

  return (
    <>
    <h1>Fitness Tracker</h1>
   <WorkoutForm onAddWorkout={handleAddWorkout} />
     <WorkoutList title="My Workouts" workouts={workouts} onRemove={handleRemove} />
      <p>Total Workouts: {workouts.length}</p>
    </>
  )
}

export default App
