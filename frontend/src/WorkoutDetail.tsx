import { useParams, useNavigate } from "react-router-dom";
import { WORKOUTS } from "./data/workoutData";

export default function WorkoutDetail() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const list = WORKOUTS[category as keyof typeof WORKOUTS] || [];
  const workout = list.find((w) => w.id === id);

  if (!workout) {
    return (
      <div className="p-6 text-white">
        <button onClick={() => navigate(-1)} className="text-pink-300 hover:underline">
          ← Back
        </button>
        <p>Workout not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#031226] to-[#020f20] text-white">

      <button onClick={() => navigate(-1)} className="text-pink-300 mb-4 hover:underline">
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-blue-300 mb-2">{workout.name}</h1>
      <p className="text-gray-300 mb-4">{workout.duration} • {workout.difficulty}</p>

      <div className="bg-white/10 border border-white/20 p-5 rounded-xl mb-6">
        <p><strong>🔥 Calories:</strong> {workout.calories ?? "N/A"} kcal</p>
        <p><strong>🏋️ Sets:</strong> {workout.sets ?? "N/A"}</p>
        <p><strong>🔁 Reps:</strong> {workout.reps ?? "N/A"}</p>
        <p><strong>💪 Muscles:</strong> {workout.muscles ?? "N/A"}</p>
        <p><strong>🎽 Equipment:</strong> {workout.equipment?.join(", ") || "None"}</p>
      </div>

      <h2 className="text-2xl font-semibold text-blue-300 mb-3">How to do it</h2>
      <ul className="space-y-2">
        {workout.steps?.map((step: string, index: number) => (
          <li
            key={index}
            className="p-3 bg-white/10 border border-white/20 rounded-lg"
          >
            {index + 1}. {step}
          </li>
        ))}
      </ul>
    </div>
  );
}