import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.age || !form.height || !form.weight || !form.gender) return;
    navigate("/dashboard");

  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-[#0a0f24] to-blue-900 flex items-center justify-center">

      {/* FLOATING ANIMATED BALLS */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-xl animate-spin-slow"></div>

      {/* LOGIN CARD */}
      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl w-[380px] p-10 animate-fadeInOpacity">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8 animate-slideUp">
          <span className="text-6xl drop-shadow-lg">🏋️‍♂️</span>
          <h1 className="text-3xl font-bold text-blue-400 tracking-wide mt-3 drop-shadow-xl">
            FITHUB LOGIN
          </h1>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col space-y-4">

          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <input
            type="number"
            placeholder="Height in CM"
            value={form.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <input
            type="number"
            placeholder="Weight in KG"
            value={form.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />

          <select
            value={form.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          >
            <option value="" className="text-black">Select Gender</option>
            <option value="male" className="text-black">Male</option>
            <option value="female" className="text-black">Female</option>
          </select>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-7 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl 
                     shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 
                     animate-slideUp"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
