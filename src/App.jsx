import WorkoutList from './WorkoutList.jsx'
import WorkoutForm from './WorkoutForm.jsx'
import {useState} from "react"; 
import {useEffect} from "react";

function App() {

let initialWorkouts = [];
  const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts) {
      initialWorkouts = JSON.parse(savedWorkouts);
} else {
  initialWorkouts = [
  { id: 1, type: "Running", duration: 30 },
  { id: 2, type: "Strength", duration: 45 },
  { id: 3, type: "Yoga", duration: 20 },
  { id: 4, type: "Walking", duration: 40 }

  ];
}

  const [workouts, setWorkouts] = useState(initialWorkouts);


useEffect(() => {
  localStorage.setItem("workouts", JSON.stringify(workouts));
console.log("Workouts changed");
}, [workouts]);

const [filterType, setFilterType] = useState("All");

function handleAddWorkout (newWorkout) {
    setWorkouts([...workouts, newWorkout]);
    
  }

function handleRemove(id) {
  setWorkouts(workouts.filter((workout) => workout.id !== id));
  }

const filteredWorkouts = workouts.filter(
  (workout) => filterType === "All" || workout.type === filterType
);


  return (
    <>
    <h1>Fitness Tracker</h1>
   <WorkoutForm onAddWorkout={handleAddWorkout} />
   <select value={filterType} onChange={(event) => setFilterType(event.target.value)}>
    <option value="All">All</option>
    <option value="Running">Running</option>
    <option value="Strength">Strength</option>
    <option value="Yoga">Yoga</option>
    <option value="Walking">Walking</option>
   </select>
     <WorkoutList title="My Workouts" workouts={filteredWorkouts} onRemove={handleRemove} />
      <p>Total Workouts: {workouts.length}</p>
    </>
  )
}

export default App
