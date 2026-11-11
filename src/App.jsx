import WorkoutCard from  './WorkoutCard.jsx'

function App() {

  return (
    <>
    <h1>Fitness Tracker</h1>
     <WorkoutCard type="Running" duration={30} />
     <WorkoutCard type="Strength" duration={45} />
     <WorkoutCard type="Yoga" duration={20} />
     <WorkoutCard type="Walking" duration={40} />

    </>
  )
}

export default App
