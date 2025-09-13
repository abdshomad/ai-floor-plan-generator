
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-slate-700 rounded-full w-full h-full"></div>
        <div className="absolute border-4 border-t-indigo-500 border-l-indigo-500 border-b-transparent border-r-transparent rounded-full w-full h-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
