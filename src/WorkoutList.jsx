import WorkoutCard from "./WorkoutCard"

function WorkoutList(props) {
    return (
        <>
   <h2>{props.title}</h2>
   <WorkoutCard type={props.workoutType} duration={props.workoutDuration} />
     <WorkoutCard type="Strength" duration={45} />
     <WorkoutCard type="Yoga" duration={20} />
     <WorkoutCard type="Walking" duration={40} />
    </>
    )
}

export default WorkoutList
