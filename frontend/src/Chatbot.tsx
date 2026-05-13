// frontend/src/Chatbot.tsx  (React functional component)
import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{me?:boolean,text:string}[]>([
    { text: "Welcome to FitHub Chatbot. Ask anything or type 'plan' to generate workout & diet." },
  ]);
  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { me: true, text }]);
    setInput("");
    try {
      const res = await fetch("http://127.0.0.1:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      // handle non-OK
      if (!res.ok) {
        const textBody = await res.text();
        setMessages(prev => [...prev, { text: `Server error: ${res.status} ${res.statusText} — ${textBody}` }]);
        return;
      }

      // try parse JSON safely
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        if (data.reply) {
          setMessages(prev => [...prev, { text: data.reply }]);
        } else if (data.error) {
          setMessages(prev => [...prev, { text: `Error: ${data.error} ${data.detail ? "- "+data.detail : ""}` }]);
        } else {
          setMessages(prev => [...prev, { text: JSON.stringify(data) }]);
        }
      } else {
        // server returned non-json body — show it
        const txt = await res.text();
        setMessages(prev => [...prev, { text: `Non-JSON response: ${txt}` }]);
      }
    } catch (err: any) {
      setMessages(prev => [...prev, { text: `Network error: ${String(err)}` }]);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h1 className="text-3xl font-bold mb-4">FitHub Chatbot</h1>
      <div className="space-y-3 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg ${m.me ? "bg-blue-600 text-white self-end" : "bg-white/10"}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          placeholder="Ask FitHub..."
          className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 outline-none"
        />
        <button onClick={send} className="px-4 py-2 rounded-lg bg-blue-500">Send</button>
      </div>
    </div>
  );
}
