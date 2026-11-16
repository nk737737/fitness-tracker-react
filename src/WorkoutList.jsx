import WorkoutCard from "./WorkoutCard"

function WorkoutList(props) {



    return (
        <>
   <h2>{props.title}</h2>
   {props.workouts.length > 0 ? (
   props.workouts.map(workout => (
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
