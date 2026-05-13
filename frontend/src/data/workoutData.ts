// ==========================
// WORKOUT CATEGORIES
// ==========================
export const WORKOUT_CATEGORIES = [
  { key: "weightloss", title: "Weight Loss", emoji: "🔥" },
  { key: "weightgain", title: "Weight Gain", emoji: "🍗" },
  { key: "musclegain", title: "Muscle Gain", emoji: "💪" },
  { key: "abs", title: "Abs Workout", emoji: "🧱" },
  { key: "arms", title: "Arms Workout", emoji: "🏋️‍♂️" },
  { key: "legs", title: "Legs Workout", emoji: "🦵" },
  { key: "back", title: "Back Workout", emoji: "🧬" },
  { key: "shoulders", title: "Shoulders", emoji: "🛡️" },
  { key: "chest", title: "Chest Workout", emoji: "🔥" },
  { key: "cardio", title: "Cardio", emoji: "🏃" },
  { key: "hiit", title: "HIIT", emoji: "⚡" },
  { key: "yoga", title: "Yoga", emoji: "🧘" },
  { key: "fullbody", title: "Full Body", emoji: "🤸" },
  { key: "home", title: "Home Workout", emoji: "🏠" }
];

// ==========================
// WORKOUT DATA
// ==========================
export const WORKOUTS: Record<string, any[]> = {

  // ---------------------------------------------------
  // 🔥 1. WEIGHT LOSS
  // ---------------------------------------------------
  weightloss: [
    {
      id: "jumping-jacks",
      name: "Jumping Jacks",
      duration: "3 minutes",
      difficulty: "Easy",
      calories: 40,
      equipment: [],
      sets: "3 sets",
      reps: "45 reps",
      muscles: "Full body",
      steps: [
        "Stand straight with feet together",
        "Jump while spreading legs & raising arms",
        "Return to starting position",
        "Repeat maintaining steady breathing"
      ]
    },
    {
      id: "burpees",
      name: "Burpees",
      duration: "2 minutes",
      difficulty: "Hard",
      calories: 90,
      equipment: [],
      sets: "3 sets",
      reps: "12 reps",
      muscles: "Full body, core",
      steps: [
        "Start standing",
        "Drop into a squat",
        "Kick feet back into plank",
        "Do one push-up",
        "Jump back up explosively"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🍗 2. WEIGHT GAIN
  // ---------------------------------------------------
  weightgain: [
    {
      id: "pushups",
      name: "Push-Ups",
      duration: "10 minutes",
      difficulty: "Medium",
      calories: 80,
      equipment: [],
      sets: "4 sets",
      reps: "12 reps",
      muscles: "Chest, triceps",
      steps: [
        "Place hands shoulder-width apart",
        "Lower chest to floor",
        "Push back up while keeping the core tight"
      ]
    },
    {
      id: "squats",
      name: "Bodyweight Squats",
      duration: "8 minutes",
      difficulty: "Medium",
      calories: 65,
      equipment: [],
      sets: "4 sets",
      reps: "15 reps",
      muscles: "Quads, glutes",
      steps: [
        "Stand feet shoulder-width apart",
        "Sit back like a chair",
        "Push through heels to stand tall"
      ]
    }
  ],

  // ---------------------------------------------------
  // 💪 3. MUSCLE GAIN
  // ---------------------------------------------------
  musclegain: [
    {
      id: "bench-press",
      name: "Bench Press",
      duration: "12 minutes",
      difficulty: "Medium",
      calories: 95,
      equipment: ["Barbell"],
      sets: "5 sets",
      reps: "8 reps",
      muscles: "Chest, triceps",
      steps: [
        "Lie flat on bench",
        "Grip bar slightly wider than shoulder",
        "Lower bar to chest",
        "Push back up powerfully"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🧱 4. ABS WORKOUT
  // ---------------------------------------------------
  abs: [
    {
      id: "crunches",
      name: "Crunches",
      duration: "5 minutes",
      difficulty: "Easy",
      calories: 30,
      equipment: [],
      sets: "4 sets",
      reps: "20 reps",
      muscles: "Upper abs",
      steps: [
        "Lie on back with knees bent",
        "Lift shoulders toward ceiling",
        "Squeeze abs on top",
        "Lower slowly"
      ]
    },
    {
      id: "leg-raises",
      name: "Leg Raises",
      duration: "5 minutes",
      difficulty: "Medium",
      calories: 35,
      equipment: [],
      sets: "3 sets",
      reps: "12 reps",
      muscles: "Lower abs",
      steps: [
        "Lie flat, legs straight",
        "Lift legs to 90 degrees",
        "Lower without touching floor"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🏋️‍♂️ 5. ARMS
  // ---------------------------------------------------
  arms: [
    {
      id: "bicep-curls",
      name: "Bicep Curls",
      duration: "6 minutes",
      difficulty: "Easy",
      calories: 25,
      equipment: ["Dumbbells"],
      sets: "3 sets",
      reps: "12 reps",
      muscles: "Biceps",
      steps: [
        "Hold dumbbells at sides",
        "Curl upward",
        "Lower slowly"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🦵 6. LEGS
  // ---------------------------------------------------
  legs: [
    {
      id: "lunges",
      name: "Lunges",
      duration: "7 minutes",
      difficulty: "Medium",
      calories: 40,
      equipment: [],
      sets: "4 sets",
      reps: "12 reps each leg",
      muscles: "Glutes, quads",
      steps: [
        "Step forward with one leg",
        "Lower back knee",
        "Push back to standing"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🧬 7. BACK
  // ---------------------------------------------------
  back: [
    {
      id: "pull-ups",
      name: "Pull-Ups",
      duration: "5 minutes",
      difficulty: "Hard",
      calories: 50,
      equipment: ["Pull-up bar"],
      sets: "4 sets",
      reps: "8 reps",
      muscles: "Lats, upper back",
      steps: [
        "Grip bar shoulder-width",
        "Pull body upward",
        "Lower slowly"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🛡️ 8. SHOULDERS
  // ---------------------------------------------------
  shoulders: [
    {
      id: "shoulder-press",
      name: "Shoulder Press",
      duration: "6 minutes",
      difficulty: "Medium",
      calories: 35,
      equipment: ["Dumbbells"],
      sets: "4 sets",
      reps: "10 reps",
      muscles: "Deltoids",
      steps: [
        "Hold dumbbells at shoulders",
        "Press straight up",
        "Lower under control"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🔥 9. CHEST
  // ---------------------------------------------------
  chest: [
    {
      id: "incline-pushups",
      name: "Incline Push-Ups",
      duration: "5 minutes",
      difficulty: "Easy",
      calories: 40,
      equipment: [],
      sets: "3 sets",
      reps: "15 reps",
      muscles: "Upper chest",
      steps: [
        "Place hands on elevated surface",
        "Lower chest",
        "Push back up"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🏃 10. CARDIO
  // ---------------------------------------------------
  cardio: [
    {
      id: "running",
      name: "Running (Outdoor/Treadmill)",
      duration: "20 minutes",
      difficulty: "Medium",
      calories: 200,
      equipment: [],
      muscles: "Full body",
      steps: [
        "Start slow jogging",
        "Increase speed gradually",
        "Maintain breathing"
      ]
    }
  ],

  // ---------------------------------------------------
  // ⚡ 11. HIIT
  // ---------------------------------------------------
  hiit: [
    {
      id: "hiit-circuit",
      name: "HIIT 1-Minute Rounds",
      duration: "12 minutes",
      difficulty: "Hard",
      calories: 180,
      equipment: [],
      steps: [
        "30 sec sprint",
        "30 sec rest",
        "Repeat for 10 rounds"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🧘 12. YOGA
  // ---------------------------------------------------
  yoga: [
    {
      id: "sun-salutation",
      name: "Surya Namaskar",
      duration: "10 minutes",
      difficulty: "Easy",
      calories: 45,
      equipment: [],
      steps: [
        "Start standing",
        "Perform flowing posture sequence",
        "Synchronize breathing"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🤸 13. FULL BODY
  // ---------------------------------------------------
  fullbody: [
    {
      id: "plank",
      name: "Plank Hold",
      duration: "2 minutes",
      difficulty: "Medium",
      calories: 25,
      equipment: [],
      steps: [
        "Stay in plank position",
        "Engage core fully",
        "Maintain straight body line"
      ]
    }
  ],

  // ---------------------------------------------------
  // 🏠 14. HOME WORKOUT
  // ---------------------------------------------------
  home: [
    {
      id: "wall-sit",
      name: "Wall Sit",
      duration: "2 minutes",
      difficulty: "Medium",
      calories: 20,
      equipment: [],
      steps: [
        "Slide back down wall",
        "Hold 90° knee position",
        "Keep core tight"
      ]
    }
  ]
};
