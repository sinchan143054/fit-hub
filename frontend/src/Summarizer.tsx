import { useState } from "react";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("short");
  const [result, setResult] = useState("");

  const summarize = async () => {
    if (!text.trim()) return;

const res = await fetch("http://localhost:5000/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, mode }),
    });

    const data = await res.json();
    setResult(data.summary);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">

      <h1 className="text-4xl font-bold text-blue-400 mb-6">
        AI Summarizer ✨
      </h1>

      {/* INPUT BOX */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        className="w-full h-72 p-4 bg-white/10 border border-white/20 rounded-xl outline-none text-lg"
      />

      {/* MODE BUTTONS */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setMode("short")}
          className={`px-5 py-2 rounded-xl ${mode === "short" ? "bg-blue-500" : "bg-white/10"}`}
        >
          Short
        </button>

        <button
          onClick={() => setMode("medium")}
          className={`px-5 py-2 rounded-xl ${mode === "medium" ? "bg-blue-500" : "bg-white/10"}`}
        >
          Medium
        </button>

        <button
          onClick={() => setMode("long")}
          className={`px-5 py-2 rounded-xl ${mode === "long" ? "bg-blue-500" : "bg-white/10"}`}
        >
          Long
        </button>
      </div>

      {/* SUMMARIZE BUTTON */}
      <button
        onClick={summarize}
        className="mt-6 px-6 py-3 text-xl bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg hover:scale-105 transition"
      >
        Summarize
      </button>

      {/* OUTPUT */}
      {result && (
        <div className="mt-8 p-6 bg-white/5 border border-white/20 rounded-xl">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">Summary</h2>
          <p className="text-gray-200 text-lg leading-relaxed">{result}</p>
        </div>
      )}
    </div>
  );
}
