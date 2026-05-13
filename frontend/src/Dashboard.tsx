import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#0b1220] to-blue-900 text-white p-6">

      <div className="flex items-center justify-between mb-10 animate-slideUp">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back, Sinchan 👋</h1>
          <p className="text-gray-300 mt-1">Your Fitness Hub — Everything in one place</p>
        </div>

        <div className="w-14 h-14 rounded-full bg-white/20 shadow-xl flex items-center justify-center text-3xl">
          🏋️‍♂️
        </div>
      </div>

      {/* MAIN CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* WORKOUT */}
        <a href="/workouts" className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/40 to-cyan-500/20 border border-white/20 backdrop-blur-xl shadow-lg hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-cyan-300">🏋️ Explore Workout Plans</h2>
          <p className="text-gray-300 mt-2">Weight loss, muscle gain, HIIT & more.</p>
        </a>

        {/* DIET */}
        <a href="/diet" className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/40 to-red-400/20 border border-white/20 backdrop-blur-xl shadow-lg hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-pink-300">🍎 Explore Diet Plans</h2>
          <p className="text-gray-300 mt-2">Veg, non-veg, both — everything included.</p>
        </a>

        {/* SUMMARIZER */}
        <a href="/summarizer" className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg hover:scale-105 transition-all">
          <h2 className="text-2xl font-bold text-purple-300">📝 AI Summarizer</h2>
          <p className="text-gray-300 mt-2">Summarize your fitness content instantly.</p>
        </a>

 



        {/* CHATBOT (REPLACED AI RECOMMEND) */}
       <Link to="/chatbot">
  <div className="p-6 mt-6 rounded-2xl bg-gradient-to-br from-purple-500/40 to-indigo-400/20 
                  border border-white/20 backdrop-blur-xl shadow-lg hover:scale-105 
                  transition-all hover:shadow-purple-500/50">
    <h2 className="text-2xl font-bold text-purple-300">🤖 AI Chatbot</h2>
    <p className="text-gray-300 mt-2">
      Ask any fitness, workout, or diet questions.
    </p>
  </div>
</Link>

      </div>

      {/* FOOTER */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        FITHUB AI — Built for your transformation 💙🔥
      </div>
    </div>
  );
}
