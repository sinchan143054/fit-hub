import random

# -----------------------------
# BASIC KNOWLEDGE RESPONSES
# -----------------------------
GENERAL_FAQ = {
    "bmi": "BMI = weight(kg) / height(m)^2. A healthy BMI is 18.5 – 24.9.",
    "protein": "Adults need 0.8–2g protein per kg bodyweight depending on goal.",
    "creatine": "Creatine monohydrate is safe. 3–5g/day improves strength.",
    "water": "Drink 3–4 litres daily for hydration & fat loss.",
    "sleep": "Sleep 7–9 hours for muscle recovery and fat burn."
}

# -----------------------------
# WORKOUT PLAN GENERATOR
# -----------------------------
def generate_workout(day, goal):
    workouts = {
        "weightloss": [
            "Jumping Jacks – 40 reps x 4 sets",
            "Burpees – 15 reps x 3 sets",
            "Squat Jumps – 15 reps x 3 sets",
            "Mountain Climbers – 30 sec x 4 sets",
            "Fast Walking – 20 mins",
        ],
        "musclegain": [
            "Push-ups – 15 reps x 4 sets",
            "Dumbbell Rows – 12 reps x 4 sets",
            "Squats – 15 reps x 4 sets",
            "Shoulder Press – 12 reps x 3 sets",
            "Plank – 1 min x 3 sets",
        ]
    }

    today = workouts.get(goal, workouts["weightloss"])
    random.shuffle(today)

    return f"**Day {day} Workout ({goal})**:\n" + "\n".join([f"• {w}" for w in today])


# -----------------------------
# DIET PLAN GENERATOR
# -----------------------------
def generate_diet(preference):
    veg = ["Paneer + Roti", "Oats + Fruits", "Dal Rice", "Upma + Chutney", "Veg Salad"]
    nonveg = ["Egg Omelette", "Chicken Rice", "Fish Curry", "Grilled Chicken", "Egg Sandwich"]

    if preference == "veg":
        return random.choice(veg)
    elif preference == "nonveg":
        return random.choice(nonveg)
    else:
        return random.choice(veg + nonveg)


# -----------------------------
# MASTER CHATBOT REPLY
# -----------------------------
def chatbot_reply(message: str):
    msg = message.lower()

    # FAQ detection
    for key in GENERAL_FAQ:
        if key in msg:
            return GENERAL_FAQ[key]

    # Workout plan question
    if "day" in msg and "workout" in msg:
        days = [int(s) for s in msg.split() if s.isdigit()]
        if days:
            day_count = days[0]
            goal = "weightloss" if "loss" in msg else "musclegain"
            result = []

            for d in range(1, day_count + 1):
                result.append(generate_workout(d, goal))

            return "\n\n".join(result)

    # Diet plan question
    if "diet" in msg:
        pref = "veg"
        if "nonveg" in msg:
            pref = "nonveg"
        if "both" in msg:
            pref = "both"

        return f"**Your Diet Suggestion ({pref})**: {generate_diet(pref)}"

    # Default fallback
    return "I can help with: workouts (1 day–1 year), diet plans (veg/nonveg/both), BMI, calories, exercises. Try:\n➡ 'Give 7-day weight loss workout plan'\n➡ 'Make diet plan veg'\n➡ 'What is BMI?'"
