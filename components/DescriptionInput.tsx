
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface DescriptionInputProps {
  description: string;
  setDescription: (value: string) => void;
  stories: number;
  setStories: (value: number) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ description, setDescription, stories, setStories, onGenerate, isLoading }) => {
  
  const handleStoryChange = (increment: number) => {
    const newValue = stories + increment;
    if (newValue >= 1 && newValue <= 10) { // Capping at 10 stories
      setStories(newValue);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-lg">
      <div>
        <label htmlFor="description" className="text-lg font-semibold text-slate-200 mb-2">
          Describe Your Dream Space
        </label>
        <p className="text-sm text-slate-400 mb-4">
          Be as detailed as possible. Mention rooms, dimensions, features (like a kitchen island or a walk-in closet), and the overall style.
        </p>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., A modern 2-story family home. Ground floor has an open-plan kitchen, living area, and a small office. Second floor has 3 bedrooms and 2 bathrooms..."
          className="w-full p-3 bg-slate-900 border border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none text-slate-300 placeholder-slate-500"
          rows={10}
          disabled={isLoading}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Number of Stories
        </label>
        <div className="flex items-center">
          <button 
            onClick={() => handleStoryChange(-1)} 
            disabled={isLoading || stories <= 1}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease number of stories"
          >
            -
          </button>
          <span className="px-4 py-2 w-12 text-center bg-slate-900 border-y border-slate-600 font-mono">
            {stories}
          </span>
          <button 
            onClick={() => handleStoryChange(1)} 
            disabled={isLoading || stories >= 10}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Increase number of stories"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading || !description.trim()}
        className="mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5 mr-2" />
            Generate Floor Plan
          </>
        )}
      </button>
    </div>
  );
};

export default DescriptionInput;
