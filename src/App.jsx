import WorkoutCard from  './WorkoutCard.jsx'
import WorkoutList from './WorkoutList.jsx' 

function App() {

  return (
    <>
    <h1>Fitness Tracker</h1>
     <WorkoutList title="My Workouts" workoutType="Running" workoutDuration={30} />

    </>
  )
}

export default App
