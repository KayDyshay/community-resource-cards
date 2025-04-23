
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-white">Loading Techropolis...</p>
      </div>
    </div>
  );
};

export default Loading;
