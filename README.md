# AI Career Navigator

A dynamic, intelligent assistant designed to help users bridge the gap between their current skill set and their target career goals.

## Vertical
**Career & Skill Development**

## Approach and Logic
This assistant acts as a personalized Career Mentor. The logic follows a two-tier approach:
1. **Context Parsing:** The frontend captures the user's specific **Goal** and **Current Skills**.
2. **Reasoning Engine:** The backend utilizes an LLM (GPT-4o-mini) to analyze the "delta" between the user's current profile and their target outcome. Instead of generic advice, it generates a prioritized, logical, and actionable roadmap.

## How It Works
- **Frontend:** Built with React and Vite for a fast, responsive user experience.
- **Backend:** A FastAPI-based server that securely handles API requests and provides logical processing via OpenAI.
- **Decision Making:** The prompt engineering ensures the AI maintains a consistent persona (Expert Mentor) and provides structured output rather than conversational fluff.

## Setup Instructions

### Backend
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Create a `.env` file and add your API key: `OPENAI_API_KEY=your_key_here`
4. Run the server: `python app.py`

### Frontend
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Assumptions
- We assume the user provides honest self-assessments of their current skill level to ensure the roadmap is relevant.
- This assistant is designed to provide guidance; users should cross-reference technical roadmaps with industry-standard resources.
