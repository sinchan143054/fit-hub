import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./SplashScreen";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

import WorkoutPlans from "./WorkoutPlans";
import WorkoutCategory from "./WorkoutCategory";
import WorkoutDetail from "./WorkoutDetail";

import DietPlans from "./DietPlans";
import DietCategory from "./DietCategory";
import DietDetail from "./DietDetail";
import Summarizer from "./Summarizer";
import Chatbot from "./Chatbot";
 



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* SPLASH → LOGIN */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />

        {/* MAIN DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* WORKOUT ROUTES */}
        <Route path="/workouts" element={<WorkoutPlans />} />
        <Route path="/workouts/:category" element={<WorkoutCategory />} />
        <Route path="/workouts/:category/:id" element={<WorkoutDetail />} />

        {/* DIET ROUTES */}
        <Route path="/diet" element={<DietPlans />} />
        <Route path="/diet/:goal" element={<DietCategory />} />
        <Route path="/diet/:goal/:type" element={<DietDetail />} />

<Route path="/summarizer" element={<Summarizer />} />
<Route path="/chatbot" element={<Chatbot />} />
 


      </Routes>
    </BrowserRouter>
  );
}
