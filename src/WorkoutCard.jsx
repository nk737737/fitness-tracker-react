function WorkoutCard(props) {
    return (
        <div>
            <h2>{props.type}</h2>
            <p>Duration: {props.duration} minutes</p>
        </div>
    )
}

export default WorkoutCard