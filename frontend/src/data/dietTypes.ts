export interface DietMainCategory {
  key: string;
  title: string;
  subtitle: string;
  emoji: string;
}

export const DIET_MAIN_CATEGORIES: DietMainCategory[] = [
  {
    key: "weightloss",
    title: "Weight Loss Diet",
    subtitle: "Low-calorie foods to burn fat fast",
    emoji: "🔥",
  },
  {
    key: "weightgain",
    title: "Weight Gain Diet",
    subtitle: "High-calorie foods to gain healthy weight",
    emoji: "🍛",
  },
  {
    key: "muscle",
    title: "Muscle Gain Diet",
    subtitle: "High-protein meals to build muscle",
    emoji: "💪",
  },
  {
    key: "balanced",
    title: "Balanced Diet",
    subtitle: "Overall health and nutrition",
    emoji: "🥗",
  },
  {
    key: "detox",
    title: "Detox Diet",
    subtitle: "Clean your body & stay fresh",
    emoji: "🫧",
  },
];
