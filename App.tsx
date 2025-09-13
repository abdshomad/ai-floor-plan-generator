
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import DescriptionInput from './components/DescriptionInput';
import FloorPlanDisplay from './components/FloorPlanDisplay';
import { generateFloorPlan } from './services/geminiService';

const App: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [stories, setStories] = useState<number>(1);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!description.trim()) {
      setError('Please enter a description for your floor plan.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageB64 = await generateFloorPlan(description, stories);
      if (imageB64) {
        setGeneratedImage(`data:image/png;base64,${imageB64}`);
      } else {
        setError('The AI could not generate a floor plan from your description. Please try again with more details.');
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [description, stories]);

  const handleStartOver = () => {
    setDescription('');
    setStories(1);
    setGeneratedImage(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <DescriptionInput 
                description={description}
                setDescription={setDescription}
                stories={stories}
                setStories={setStories}
                onGenerate={handleGenerate}
                isLoading={isLoading}
              />
            </div>
            <div className="flex flex-col">
              <FloorPlanDisplay 
                image={generatedImage}
                isLoading={isLoading}
                error={error}
                onStartOver={handleStartOver}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
