from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class UserQuery(BaseModel):
    goal: str
    skills: str

@app.post("/chat")
async def get_advice(query: UserQuery):
    # Logic: Analyze context to provide a tailored response
    response = f"Based on your goal of {query.goal} and your skills in {query.skills}, I recommend focusing on building projects that bridge these two areas."
    return {"reply": response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
