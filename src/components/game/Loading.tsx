
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background-dark">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-text-primary">Loading Techropolis...</p>
        <p className="text-sm text-text-secondary mt-2">Prepare for your tech adventure</p>
      </div>
    </div>
  );
};

export default Loading;
