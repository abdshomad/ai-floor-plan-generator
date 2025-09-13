# AI Floor Plan Generator

This is a web application that leverages the power of Google's Gemini API ("Nano Banana" model) to generate 2D architectural floor plans from user-provided text descriptions. Users can describe their ideal space, specify the number of stories, and receive a professionally styled blueprint image in seconds.

![AI Floor Plan Generator Screenshot](https://storage.googleapis.com/aistudio-ux-team-public/sdk-samples/floor_plan_generator_screenshot.png)

## ✨ Features

-   **AI-Powered Generation**: Converts natural language descriptions into detailed floor plan images.
-   **Multi-Story Support**: Generate plans for buildings with multiple floors, all displayed in a single, consolidated image.
-   **Detailed Descriptions**: The more detailed the prompt, the more accurate the floor plan. Users can specify rooms, dimensions, features, and styles.
-   **Responsive UI**: A clean, modern, and responsive interface built with React and Tailwind CSS.
-   **Loading & Error States**: Provides clear user feedback during generation and for any potential errors.
-   **Start Over**: Easily clear the current result and start a new design.

## 🚀 How to Use

1.  **Describe Your Space**: In the text area, write a detailed description of the floor plan you envision.
2.  **Select Stories**: Use the stepper to choose the number of floors for the building.
3.  **Generate**: Click the "Generate Floor Plan" button.
4.  **View**: The generated floor plan will appear on the right side of the screen.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Model**: Google Gemini (`gemini-2.5-flash-image-preview`) via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) SDK.

## 🔑 API Key Setup

This application requires a Google Gemini API key to function. The key must be configured as an environment variable named `API_KEY`.

The application's code (`services/geminiService.ts`) directly accesses `process.env.API_KEY` to authenticate with the Gemini API.

## 📂 Project Structure

```
.
├── index.html                # Main HTML entry point
├── index.tsx                 # React app root
├── metadata.json             # Application metadata
├── App.tsx                   # Main application component (state management)
├── services/
│   └── geminiService.ts      # Handles all Gemini API interactions
└── components/
    ├── Header.tsx            # The main header component
    ├── DescriptionInput.tsx  # Component for user text and story input
    ├── FloorPlanDisplay.tsx  # Component to display the generated image or status
    └── icons/
        ├── LoadingSpinner.tsx  # SVG loading spinner
        └── SparklesIcon.tsx    # SVG icon for the generate button
```
