function WorkoutCard(props) {
    return (
        <div>
            <h2>{props.type}</h2>
            <p>Duration: {props.duration} minutes</p>
            <button onClick={() => props.onRemove(props.id)}>Delete</button>
        </div>
    )
}

export default WorkoutCard