# backend/generator.py

WORKOUT_LIBRARY = {
    "warmup": [
        "5 min light jogging",
        "3 min jumping jacks",
        "2 min arm circles",
        "Dynamic stretching"
    ],

    "weightloss": [
        "Burpees – 3 sets × 15 reps",
        "Mountain climbers – 4 sets × 30 sec",
        "High knees – 3 sets × 45 sec",
        "Jumping rope – 10 minutes"
    ],

    "weightgain": [
        "Push ups – 4 sets × 12 reps",
        "Squats – 4 sets × 15 reps",
        "Bench dips – 3 sets × 12 reps",
        "Lunges – 3 sets × 12 reps"
    ],

    "musclegain": [
        "Bench press – 5 sets × 8 reps",
        "Deadlift – 4 sets × 6 reps",
        "Shoulder press – 4 sets × 10 reps",
        "Barbell squats – 4 sets × 8 reps"
    ],

    "abs": [
        "Crunches – 4 sets × 20 reps",
        "Plank – 1 min × 3 rounds",
        "Leg raises – 3 sets × 15 reps",
        "Bicycle crunches – 3 sets × 20 reps"
    ],

    "legs": [
        "Squats – 4 sets × 15 reps",
        "Lunges – 4 sets × 12 each leg",
        "Wall sit – 2 min × 2 rounds",
        "Calf raises – 4 sets × 20 reps"
    ],

    "arms": [
        "Bicep curls – 4 sets × 12 reps",
        "Tricep dips – 3 sets × 15 reps",
        "Hammer curls – 3 sets × 12 reps",
        "Diamond pushups – 3 sets × 10 reps"
    ],

    "fullbody": [
        "Burpees – 3 sets × 15",
        "Pushups – 3 sets × 20",
        "Squats – 3 sets × 20",
        "Plank – 1 min × 2"
    ],
}

def generate_daily_plan(goal: str):
    goal = goal.lower().replace(" ", "")
    warmup = WORKOUT_LIBRARY["warmup"]
    main = WORKOUT_LIBRARY.get(goal, WORKOUT_LIBRARY["fullbody"])

    return {
        "warmup": warmup,
        "main": main,
        "cooldown": [
            "Stretch your hamstrings – 1 min",
            "Butterfly stretch – 1 min",
            "Deep breathing – 2 min"
        ]
    }

def generate_weekly_plan(goal: str):
    return {f"Day {i+1}": generate_daily_plan(goal) for i in range(7)}

def generate_month_plan(goal: str):
    return {f"Week {i+1}": generate_weekly_plan(goal) for i in range(4)}

def generate_full_plan(goal: str, duration: str):
    duration = duration.lower()

    if duration in ["1day", "1 day", "day"]:
        return generate_daily_plan(goal)

    if duration in ["7day", "week", "7 days"]:
        return generate_weekly_plan(goal)

    if duration in ["30day", "month", "30 days"]:
        return generate_month_plan(goal)

    # Default fallback
    return generate_weekly_plan(goal)
