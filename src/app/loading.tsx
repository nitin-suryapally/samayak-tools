import React from "react";

const Loading: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50 mb-4"></div>
    <span className="text-lg text-gray-700 font-semibold">Loading...</span>
  </div>
);

export default Loading;
