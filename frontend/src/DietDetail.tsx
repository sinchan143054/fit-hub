import { useParams, useNavigate } from "react-router-dom";
import { DIET_ITEMS } from "./data/dietItems";

export default function DietDetail() {
  const { goal, type } = useParams();
  const navigate = useNavigate();

  const items =
    DIET_ITEMS[goal as keyof typeof DIET_ITEMS]?.[
      type as "veg" | "nonveg" | "both"
    ];

  if (!items) {
    return (
      <div className="p-6 text-white">
        <button
          onClick={() => navigate(-1)}
          className="text-pink-300 mb-4 hover:underline"
        >
          ← Back
        </button>
        <p>No diet items found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-[#0b1220] to-blue-900 text-white">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="text-pink-300 mb-4 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-pink-400 mb-3">{items.title}</h1>
      <p className="text-gray-300 mb-6">{items.description}</p>

      <div className="space-y-4">
        {items.foods.map((food) => (
          <div
            key={food.id}
            className="p-5 bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold text-pink-300">{food.name}</h2>

            <p className="text-gray-300 mt-2"><strong>🍽 Quantity:</strong> {food.quantity}</p>
            <p className="text-gray-300 mt-1"><strong>🔥 Calories:</strong> {food.calories}</p>
            <p className="text-gray-300 mt-1"><strong>🥚 Protein:</strong> {food.protein}</p>
            <p className="text-gray-300 mt-1"><strong>🧈 Fat:</strong> {food.fat}</p>
            <p className="text-gray-300 mt-1"><strong>🌾 Carbs:</strong> {food.carbs}</p>

            <p className="text-gray-300 mt-1"><strong>⭐ Benefit:</strong> {food.benefit}</p>
            <p className="text-gray-300 mt-1"><strong>⏰ Best Time:</strong> {food.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
