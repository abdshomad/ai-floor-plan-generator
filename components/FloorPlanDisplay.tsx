
import React from 'react';
import LoadingSpinner from './icons/LoadingSpinner';

interface FloorPlanDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
  onStartOver: () => void;
}

const FloorPlanDisplay: React.FC<FloorPlanDisplayProps> = ({ image, isLoading, error, onStartOver }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-lg font-medium text-slate-300">Generating your floor plan...</p>
          <p className="text-sm text-slate-400">The AI is sketching out your ideas. This may take a moment.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="font-bold text-red-400">An Error Occurred</p>
          <p className="mt-2 text-sm text-slate-300">{error}</p>
           <button
              onClick={onStartOver}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors"
            >
              Try Again
            </button>
        </div>
      );
    }

    if (image) {
      return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img src={image} alt="Generated Floor Plan" className="w-full h-auto object-contain" />
            </div>
            <button
              onClick={onStartOver}
              className="w-full px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-md transition-colors"
            >
              Start Over
            </button>
        </div>
      );
    }

    return (
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-slate-300">Your floor plan will appear here</h3>
        <p className="mt-1 text-sm text-slate-500">
          Enter a description and click "Generate" to see the magic happen.
        </p>
      </div>
    );
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700 min-h-[400px]">
        {renderContent()}
    </div>
  );
};

export default FloorPlanDisplay;
