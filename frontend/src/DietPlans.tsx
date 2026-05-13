import { Link } from "react-router-dom";

const DIET_CATEGORIES = [
  {
    key: "weightloss",
    title: "Weight Loss Diet",
    subtitle: "Low-calorie, high-fiber meals",
    emoji: "🥗",
  },
  {
    key: "weightgain",
    title: "Weight Gain Diet",
    subtitle: "High-calorie healthy foods",
    emoji: "🍗",
  },
  {
    key: "muscle",
    title: "Muscle Gain Diet",
    subtitle: "High protein, clean carbs",
    emoji: "💪",
  },
  {
    key: "balanced",
    title: "Balanced Diet",
    subtitle: "Overall daily health food",
    emoji: "🍎",
  },
  {
    key: "protein",
    title: "High Protein Diet",
    subtitle: "Protein-rich meals",
    emoji: "🥚",
  },
  {
    key: "detox",
    title: "Detox / Cleanse Diet",
    subtitle: "Clean body with healthy food",
    emoji: "🧘",
  },
];

export default function DietPlans() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#0b1220] to-blue-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-300 mb-2">Diet Plans</h1>
        <p className="text-gray-300 mb-6">Choose a diet plan based on your health goal.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIET_CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={`/diet/${cat.key}`}
              className="p-5 rounded-xl bg-white/5 border border-white/10 
              hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-500
              transition-all hover:scale-105 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{cat.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{cat.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
