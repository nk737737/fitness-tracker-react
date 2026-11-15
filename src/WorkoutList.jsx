import WorkoutCard from "./WorkoutCard"

function WorkoutList(props) {

const workouts = [
  { id: 1, type: "Running", duration: 30 },
  { id: 2, type: "Strength", duration: 45 },
  { id: 3, type: "Yoga", duration: 20 },
  { id: 4, type: "Walking", duration: 40 }
];

    return (
        <>
   <h2>{props.title}</h2>
   {workouts.length > 0 ? (
   workouts.map(workout => (
  <WorkoutCard 
    key={workout.id} 
    type={workout.type} 
    duration={workout.duration} 
    />
))
   ) : (
   <p> No workouts yet </p>
   )}
</>
    );
}
export default WorkoutList
