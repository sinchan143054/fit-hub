import { useParams, useNavigate, Link } from "react-router-dom";
import { WORKOUTS, WORKOUT_CATEGORIES } from "./data/workoutData";

export default function WorkoutCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  const items = WORKOUTS[category as keyof typeof WORKOUTS];

  const catInfo = WORKOUT_CATEGORIES.find((c) => c.key === category);

  if (!items || !catInfo) {
    return (
      <div className="p-6 text-white">
        <button onClick={() => navigate(-1)} className="text-pink-300 hover:underline">
          ← Back
        </button>
        <p>No workouts found for this category.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#021026] to-[#011026] text-white">

      <button onClick={() => navigate(-1)} className="text-pink-300 mb-4 hover:underline">
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-blue-300 mb-1">
        {catInfo.emoji} {catInfo.title}
      </h1>
      <p className="text-gray-400 mb-5">Choose an exercise to view full details.</p>

      <div className="space-y-4">
        {items.map((w) => (
          <Link
            key={w.id}
            to={`/workouts/${category}/${w.id}`}
            className="block p-5 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-300">{w.name}</h2>
                <p className="text-gray-300 mt-1">
                  {w.duration} • {w.difficulty}
                </p>
              </div>
              <div className="text-right">
                <p className="text-cyan-300 font-bold">{w.calories ?? "-"} kcal</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
