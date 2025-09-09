"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/rockfall.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Centered content */}
      <div className="relative z-20 text-center text-white px-4">
       <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.1] drop-shadow-lg mb-4">
  Predict. <br />
  Prevent. <br />
  Protect.
</h4>


       <button
  className="mt-10 px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg font-semibold 
             border border-white shadow-[0_0_10px_white] transition-colors 
             hover:bg-gray-800 hover:shadow-[0_0_15px_white]"
  onClick={() => router.push("/detect")}
>
  Analyse
</button>

      </div>
    </div>
  );
};

export default HomePage;
