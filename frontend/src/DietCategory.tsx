import { Link, useParams, useNavigate } from "react-router-dom";

export default function DietCategory() {
  const { goal } = useParams();
  const navigate = useNavigate();

  if (!goal) {
    return (
      <div className="p-6 text-white">
        <p>Invalid diet goal.</p>
      </div>
    );
  }

  const CATEGORY_TITLE: any = {
    weightloss: "Weight Loss Diet",
    weightgain: "Weight Gain Diet",
    muscle: "Muscle Gain Diet",
    balanced: "Balanced Diet",
    detox: "Detox Diet",
    protein: "High Protein Diet",
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#0b1220] to-blue-900 text-white">

      <button
        onClick={() => navigate(-1)}
        className="text-pink-300 mb-4 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-pink-400 mb-3">
        {CATEGORY_TITLE[goal]}
      </h1>

      <p className="text-gray-300 mb-6">
        Choose your food preference.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* VEG */}
        <Link
          to={`/diet/${goal}/veg`}
          className="p-5 rounded-xl bg-white/10 border border-white/20
          hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400
          transition-all hover:scale-105 text-center shadow-lg"
        >
          🥦<br />
          <span className="text-xl font-semibold text-green-300">Vegetarian</span>
        </Link>

        {/* NON-VEG */}
        <Link
          to={`/diet/${goal}/nonveg`}
          className="p-5 rounded-xl bg-white/10 border border-white/20
          hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400
          transition-all hover:scale-105 text-center shadow-lg"
        >
          🍗<br />
          <span className="text-xl font-semibold text-red-300">Non-Veg</span>
        </Link>

        {/* BOTH */}
        <Link
          to={`/diet/${goal}/both`}
          className="p-5 rounded-xl bg-white/10 border border-white/20
          hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400
          transition-all hover:scale-105 text-center shadow-lg"
        >
          🍽️<br />
          <span className="text-xl font-semibold text-purple-300">Mixed</span>
        </Link>

      </div>
    </div>
  );
}
