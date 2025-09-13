
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateFloorPlan(userPrompt: string, stories: number): Promise<string | null> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }

  let fullPrompt: string;

  if (stories > 1) {
    fullPrompt = `Generate a detailed 2D architectural floor plan for a ${stories}-story building based on the following description. The output must be a single, clean, black and white image containing clearly separated and labeled views for each floor (e.g., "Floor 1", "Floor 2", etc.). Style: professional architectural blueprint. Description: "${userPrompt}"`;
  } else {
    fullPrompt = `Generate a detailed 2D architectural floor plan based on the following description. The output should be a single, clean, black and white image with clear labels for rooms, doors, and windows. Style: professional architectural blueprint. Description: "${userPrompt}"`;
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          {
            text: fullPrompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return part.inlineData.data;
        }
      }
    }
    
    // If no image is found in the response parts
    return null;

  } catch (error) {
    console.error("Error generating floor plan:", error);
    throw new Error("Failed to communicate with the AI model. Please check your connection and API key.");
  }
}
