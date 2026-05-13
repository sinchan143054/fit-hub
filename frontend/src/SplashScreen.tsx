import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); // 3 sec splash

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      
      {/* ANIMATED LOGO */}
      <div className="animate-bounce mb-10 text-6xl">🏋️‍♂️</div>

      <div className="text-center animate-fadeIn">
        <h1 className="text-white text-6xl font-extrabold drop-shadow-lg tracking-wide">
          FITHUB
        </h1>

        <p className="text-blue-300 mt-4 text-xl tracking-widest animate-slideUp">
          AI Powered Fitness Assistant
        </p>

        {/* Glowing Loader */}
        <div className="mt-10 flex justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

    </div>
  );
}
