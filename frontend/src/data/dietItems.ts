export const DIET_ITEMS = {
  // ==================================================
  // 1️⃣ WEIGHT LOSS
  // ==================================================
  weightloss: {
    veg: {
      title: "Weight Loss – Veg Diet",
      description: "Low-calorie, high-fiber vegetarian meals for fat loss.",
      foods: [
        {
          id: "oats",
          name: "Oats Bowl",
          quantity: "1 medium bowl (150g)",
          calories: "150 kcal",
          protein: "6g",
          fat: "3g",
          carbs: "27g",
          benefit: "High fiber, reduces hunger & improves digestion.",
          time: "Breakfast"
        },
        {
          id: "salad",
          name: "Vegetable Salad",
          quantity: "1 large bowl",
          calories: "80 kcal",
          protein: "2g",
          fat: "0g",
          carbs: "14g",
          benefit: "Low-calorie & high-water content keeps you full.",
          time: "Lunch / Evening"
        },
        {
          id: "green-tea",
          name: "Green Tea",
          quantity: "1 cup",
          calories: "2 kcal",
          protein: "0g",
          fat: "0g",
          carbs: "0g",
          benefit: "Boosts metabolism, improves fat burning.",
          time: "After lunch"
        }
      ]
    },

    nonveg: {
      title: "Weight Loss – Non-Veg",
      description: "Lean protein to burn fat & maintain muscle.",
      foods: [
        {
          id: "grilled-fish",
          name: "Grilled Fish",
          quantity: "120g",
          calories: "220 kcal",
          protein: "25g",
          fat: "6g",
          carbs: "0g",
          benefit: "High protein, improves metabolism.",
          time: "Lunch"
        },
        {
          id: "boiled-eggs",
          name: "Boiled Eggs",
          quantity: "2 eggs",
          calories: "155 kcal",
          protein: "13g",
          fat: "11g",
          carbs: "1g",
          benefit: "Controls hunger, provides clean protein.",
          time: "Breakfast"
        }
      ]
    },

    both: {
      title: "Weight Loss – Mixed",
      description: "Best combination of veg + non-veg fat-burning foods.",
      foods: [
        {
          id: "curd",
          name: "Curd Bowl",
          quantity: "1 bowl",
          calories: "98 kcal",
          protein: "11g",
          fat: "4g",
          carbs: "7g",
          benefit: "Helps digestion & reduces cravings.",
          time: "Lunch"
        },
        {
          id: "fruit-bowl",
          name: "Mixed Fruits",
          quantity: "1 bowl",
          calories: "120 kcal",
          protein: "2g",
          fat: "0g",
          carbs: "30g",
          benefit: "Very low calorie & nutrient-rich.",
          time: "Evening"
        }
      ]
    }
  },

  // ==================================================
  // 2️⃣ WEIGHT GAIN
  // ==================================================
  weightgain: {
    veg: {
      title: "Weight Gain – Veg Diet",
      description: "High-calorie vegetarian foods for healthy weight gain.",
      foods: [
        {
          id: "banana-peanut",
          name: "Banana + Peanut Butter",
          quantity: "2 bananas + 1 tbsp",
          calories: "250 kcal",
          protein: "4g",
          fat: "9g",
          carbs: "40g",
          benefit: "Calorie dense & nutritious.",
          time: "Evening"
        },
        {
          id: "paneer",
          name: "Paneer Curry",
          quantity: "150g",
          calories: "300 kcal",
          protein: "20g",
          fat: "22g",
          carbs: "7g",
          benefit: "High fat + high protein = fast weight gain.",
          time: "Lunch"
        }
      ]
    },

    nonveg: {
      title: "Weight Gain – Non-Veg",
      description: "High-calorie protein-rich meals.",
      foods: [
        {
          id: "chicken-curry",
          name: "Chicken Curry",
          quantity: "200g",
          calories: "350 kcal",
          protein: "32g",
          fat: "18g",
          carbs: "4g",
          benefit: "Helps build size and strength.",
          time: "Lunch"
        },
        {
          id: "omelette",
          name: "Egg Omelette with Ghee",
          quantity: "3 eggs",
          calories: "320 kcal",
          protein: "21g",
          fat: "26g",
          carbs: "3g",
          benefit: "Perfect for muscle + bulk.",
          time: "Breakfast"
        }
      ]
    },

    both: {
      title: "Weight Gain – Mixed",
      description: "Natural high-calorie foods for fast results.",
      foods: [
        {
          id: "milk-dry",
          name: "Milk + Dry Fruits",
          quantity: "1 glass + dry fruits",
          calories: "280 kcal",
          protein: "12g",
          fat: "14g",
          carbs: "22g",
          benefit: "Powerful mass-gainer combination.",
          time: "Night"
        }
      ]
    }
  },

  // ==================================================
  // 3️⃣ MUSCLE GAIN
  // ==================================================
  muscle: {
    veg: {
      title: "Muscle Gain – Veg",
      description: "High-protein vegetarian meals.",
      foods: [
        {
          id: "soya",
          name: "Soya Chunks",
          quantity: "100g",
          calories: "336 kcal",
          protein: "52g",
          fat: "1g",
          carbs: "33g",
          benefit: "Highest veg-protein source.",
          time: "Lunch"
        },
        {
          id: "paneer-bhurji",
          name: "Paneer Bhurji",
          quantity: "150g",
          calories: "298 kcal",
          protein: "22g",
          fat: "21g",
          carbs: "6g",
          benefit: "Perfect for muscle building.",
          time: "Breakfast"
        }
      ]
    },

    nonveg: {
      title: "Muscle Gain – Non-Veg",
      description: "Protein heavy meals for max growth.",
      foods: [
        {
          id: "chicken-breast",
          name: "Chicken Breast",
          quantity: "150g",
          calories: "260 kcal",
          protein: "30g",
          fat: "3g",
          carbs: "0g",
          benefit: "Leanest muscle-building protein.",
          time: "Lunch"
        },
        {
          id: "eggs8",
          name: "6 Egg Whites + 2 Yolks",
          quantity: "8 eggs",
          calories: "430 kcal",
          protein: "38g",
          fat: "28g",
          carbs: "4g",
          benefit: "Best for recovery & muscle gain.",
          time: "Breakfast"
        }
      ]
    },

    both: {
      title: "Muscle Gain – Mixed",
      description: "Veg + Non-Veg protein sources combined.",
      foods: [
        {
          id: "milk-whey",
          name: "Milk + Whey Protein",
          quantity: "200ml + 1 scoop",
          calories: "300 kcal",
          protein: "32g",
          fat: "5g",
          carbs: "15g",
          benefit: "Amazing pre/post workout drink.",
          time: "Post Workout"
        }
      ]
    }
  },

  // ==================================================
  // 4️⃣ BALANCED DIET
  // ==================================================
  balanced: {
    veg: {
      title: "Balanced – Veg",
      description: "Balanced vegetarian foods for everyday health.",
      foods: [
        {
          id: "dalrice",
          name: "Dal + Rice + Sabji",
          quantity: "1 meal",
          calories: "420 kcal",
          protein: "15g",
          fat: "8g",
          carbs: "70g",
          benefit: "Carbs + protein + vitamins in balance.",
          time: "Lunch"
        }
      ]
    },

    nonveg: {
      title: "Balanced – Non-Veg",
      description: "Daily nourishing non-veg meals.",
      foods: [
        {
          id: "egg-curry",
          name: "Egg Curry + Rice",
          quantity: "2 eggs + rice",
          calories: "500 kcal",
          protein: "22g",
          fat: "20g",
          carbs: "60g",
          benefit: "Perfect nutrition balance.",
          time: "Lunch"
        }
      ]
    },

    both: {
      title: "Balanced – Mixed Diet",
      description: "Combo of Veg + Non-Veg perfect daily meal.",
      foods: [
        {
          id: "thali",
          name: "Indian Mixed Thali",
          quantity: "1 thali",
          calories: "550 kcal",
          protein: "20g",
          fat: "15g",
          carbs: "85g",
          benefit: "Complete macronutrient balance.",
          time: "Lunch"
        }
      ]
    }
  },

  // ==================================================
  // 5️⃣ DETOX
  // ==================================================
  detox: {
    veg: {
      title: "Detox – Veg",
      description: "Cleansing foods for stomach & skin glow.",
      foods: [
        {
          id: "lemon-water",
          name: "Warm Lemon Water",
          quantity: "1 glass",
          calories: "5 kcal",
          protein: "0g",
          fat: "0g",
          carbs: "1g",
          benefit: "Flushes toxins.",
          time: "Morning"
        },
        {
          id: "cucumber",
          name: "Cucumber Salad",
          quantity: "1 bowl",
          calories: "40 kcal",
          protein: "1g",
          fat: "0g",
          carbs: "8g",
          benefit: "Hydrating & detoxifying.",
          time: "Evening"
        }
      ]
    },

    nonveg: {
      title: "Detox – Non-Veg Light",
      description: "Very light foods to cleanse body.",
      foods: [
        {
          id: "clear-soup",
          name: "Clear Chicken Soup",
          quantity: "1 bowl",
          calories: "120 kcal",
          protein: "14g",
          fat: "4g",
          carbs: "6g",
          benefit: "Easy digestion & healing.",
          time: "Lunch"
        }
      ]
    },

    both: {
      title: "Detox – Mixed",
      description: "Veg + Non-Veg natural cleansing foods.",
      foods: [
        {
          id: "detox-juice",
          name: "Detox Juice",
          quantity: "1 glass",
          calories: "60 kcal",
          protein: "1g",
          fat: "0g",
          carbs: "15g",
          benefit: "Cleanses stomach & liver.",
          time: "Morning"
        }
      ]
    }
  },

  // ==================================================
  // 6️⃣ HIGH PROTEIN
  // ==================================================
  protein: {
    veg: {
      title: "High Protein – Veg",
      description: "Veg foods rich in protein for workout lovers.",
      foods: [
        {
          id: "tofu",
          name: "Tofu Stir Fry",
          quantity: "150g",
          calories: "180 kcal",
          protein: "22g",
          fat: "11g",
          carbs: "5g",
          benefit: "High-quality plant protein.",
          time: "Lunch"
        },
        {
          id: "moong",
          name: "Moong Dal Bowl",
          quantity: "1 bowl",
          calories: "220 kcal",
          protein: "16g",
          fat: "1g",
          carbs: "38g",
          benefit: "Easily digestible protein.",
          time: "Evening"
        }
      ]
    },

    nonveg: {
      title: "High Protein – Non-Veg",
      description: "Best non-veg protein-rich items.",
      foods: [
        {
          id: "egg-combo",
          name: "3 Egg Whites + 2 Yolks",
          quantity: "5 eggs",
          calories: "320 kcal",
          protein: "28g",
          fat: "22g",
          carbs: "1g",
          benefit: "Perfect for muscle recovery.",
          time: "Breakfast"
        },
        {
          id: "grilled-chicken",
          name: "Grilled Chicken Breast",
          quantity: "150g",
          calories: "250 kcal",
          protein: "30g",
          fat: "3g",
          carbs: "0g",
          benefit: "Leanest muscle-building food.",
          time: "Dinner"
        }
      ]
    },

    both: {
      title: "High Protein – Mixed",
      description: "Veg + Non-Veg high protein combo meals.",
      foods: [
        {
          id: "milk-whey",
          name: "Milk + Whey Protein",
          quantity: "1 glass + 1 scoop",
          calories: "300 kcal",
          protein: "32g",
          fat: "5g",
          carbs: "15g",
          benefit: "Perfect post workout drink.",
          time: "Post Workout"
        }
      ]
    }
  }
};
