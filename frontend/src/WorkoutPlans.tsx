import { Link } from "react-router-dom";
import { WORKOUT_CATEGORIES } from "./data/workoutData";

export default function WorkoutPlans() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#021026] to-[#011026] text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-300 mb-2">Workout Plans</h1>
        <p className="text-gray-400 mb-6">Choose your goal to see workouts.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WORKOUT_CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={`/workouts/${cat.key}`}
              className="p-5 rounded-xl bg-white/5 border border-white/10
                         hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500
                         transition-all hover:scale-105 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{cat.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
