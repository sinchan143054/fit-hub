# planner.py
import random

WORKOUTS = [
    "Jumping Jacks – 40 reps",
    "Squats – 20 reps",
    "Push-ups – 15 reps",
    "Burpees – 12 reps",
    "Mountain Climbers – 30 secs",
    "Plank – 1 minute",
    "Fast Walking – 20 mins"
]

DIET_VEG = [
    "Paneer + Roti",
    "Veg Salad + Lemon Juice",
    "Dal + Brown Rice",
    "Oats + Fruits",
    "Sprouts Bowl"
]

DIET_NONVEG = [
    "Eggs + Roti",
    "Chicken Salad",
    "Grilled Fish + Veggies",
    "Chicken Rice Bowl"
]


def generate_plan(goal="weightloss", days=7, preference="veg", level="beginner", avoid=None):
    avoid = avoid or []

    # Select diet set
    if preference == "veg":
        diet_list = DIET_VEG
    elif preference == "nonveg":
        diet_list = DIET_NONVEG
    else:
        diet_list = DIET_VEG + DIET_NONVEG

    # Remove avoided foods
    diet_list = [x for x in diet_list if not any(a in x.lower() for a in avoid)]

    plan = []
    for i in range(days):
        workout = random.sample(WORKOUTS, 4)
        diet = random.choice(diet_list)
        plan.append({
            "day": i+1,
            "workout": workout,
            "diet": diet
        })

    return plan
