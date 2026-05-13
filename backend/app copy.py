from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
from chatbot import chatbot_reply

from planner import generate_plan
from summarizer import summarize_text
from nlp import add_documents, retrieve

load_dotenv()
app = Flask(__name__, static_folder=None)
CORS(app)

# Seed docs (optional)
SEED_DOCS = [
    {"id": "intro", "text": "Welcome to FitHub. Ask anything about workouts, diets, or fitness planning."},
    {"id": "bmi", "text": "BMI (Body Mass Index) = weight (kg) / (height (m))^2."}
]
try:
    add_documents(SEED_DOCS)
except Exception:
    pass

@app.post("/api/chatbot")
def chatbot_api():
    data = request.json or {}
    user_msg = data.get("message", "")

    if not user_msg:
        return jsonify({"reply": "Please type something!"})

    reply = chatbot_reply(user_msg)

    # guarantee JSON response
    return jsonify({"reply": reply})
@app.post("/api/generate_plan")
def api_generate_plan():
    """
    POST JSON:
    {
      "goal": "weightloss" | "weightgain" | "musclegain" | "balanced",
      "duration_days": 30,
      "preference": "veg"|"nonveg"|"both",
      "level": "beginner"|"intermediate"|"advanced",
      "avoid": ["egg","nuts"]  // optional
    }
    """
    data = request.json or {}
    goal = data.get("goal", "weightloss")
    days = int(data.get("duration_days", 7))
    pref = data.get("preference", "veg")
    level = data.get("level", "beginner")
    avoid = data.get("avoid", [])
    plan = generate_plan(goal=goal, days=days, preference=pref, level=level, avoid=avoid)
    return jsonify({"plan": plan})

@app.post("/api/ingest")
def api_ingest():
    data = request.json or {}
    docs = data.get("docs", [])
    if not isinstance(docs, list):
        return jsonify({"error": "docs must be a list"}), 400
    try:
        add_documents(docs)
        return jsonify({"ok": True, "added": len(docs)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.post("/api/summarize")
def api_summarize():
    data = request.json or {}
    text = data.get("text", "")
    mode = data.get("mode", "short")
    out = summarize_text(text, mode=mode)
    return jsonify({"summary": out})

@app.route("/storage/<path:filename>")
def serve_storage(filename):
    return send_from_directory("storage", filename)

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
