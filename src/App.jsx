import WorkoutList from './WorkoutList.jsx'
import {useState} from "react"; 

function App() {

  const [workouts, setWorkouts] = useState([
  { id: 1, type: "Running", duration: 30 },
  { id: 2, type: "Strength", duration: 45 },
  { id: 3, type: "Yoga", duration: 20 },
  { id: 4, type: "Walking", duration: 40 }

  ]);

function handleRemove() {
  if (workouts.length > 0) {
    setWorkouts (workouts.slice(0, -1));
  }
  
}

const [duration, setDuration] = useState("");
const [type, setType] = useState("Running");

function handleSubmit (event) {
  event.preventDefault();
  const newWorkout ={
      id: Date.now(),
      type: type,
      duration: Number(duration)
  }
  setWorkouts([...workouts, newWorkout]);
  console.log("From submited");
}

  return (
    <>
    <h1>Fitness Tracker</h1>
    <form onSubmit={handleSubmit}>
    <select 
    value={type}
    onChange={(event) => setType(event.target.value)}
    >
      <option value="Running">Running</option>
      <option value="Strength">Strength</option>
      <option value="Yoga">Yoga</option>
      <option value="Walking">Walking</option>
    </select>
    <input 
      type="number"
      value={duration}
      onChange={(event) => setDuration(event.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
     <WorkoutList title="My Workouts" workouts={workouts} />
      <p>Total Workouts: {workouts.length}</p>
      <button onClick={handleRemove}>Remove Workout</button>
      <p>Duration: {duration} minutes</p>
    </>
  )
}

export default App
