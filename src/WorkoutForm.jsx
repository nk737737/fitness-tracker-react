import {useState} from "react"; 


function WorkoutForm ({onAddWorkout}) {
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("Running");
    const [error, setError] = useState("");

function handleSubmit(event) {
    event.preventDefault();

if (
    duration === "" ||
    Number(duration) < 1 || 
    Number(duration) > 180 
) 

{
    setError("Duration must be between 1 and 180 minutes.");
    return;
}
setError("");

    const newWorkout = {
        id: Date.now(),
        type: type,
        duration: Number(duration)
    }
    onAddWorkout(newWorkout);
}
   
    return (
        <>
        <h2>Add Workout</h2>
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
      {error && <p>{error}</p>}
      <button type="submit">Add Workout</button>
    </form>
    </>
    )
}

export default WorkoutForm