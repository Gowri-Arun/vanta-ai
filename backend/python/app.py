from fastapi import FastAPI, Request
from pydantic import BaseModel
from services.fir_generator import generate_fir
from services.sentiment import analyze_sentiment

app = FastAPI()

class Message(BaseModel):
    message: str

@app.post("/generate-fir")
async def fir_route(data: Message):
    return {"fir": generate_fir(data.message)}

@app.post("/analyze-sentiment")
async def sentiment_route(data: Message):
    return {"sentiment": analyze_sentiment(data.message)}
