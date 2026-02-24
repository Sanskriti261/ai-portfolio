from fastapi import APIRouter, HTTPException
from schemas import ChatRequest, ChatResponse
from ai.openrouter import get_ai_response
from database import chat_collection
from datetime import datetime

# Prefix ONLY here
router = APIRouter(prefix="/chat", tags=["Chat"])

@router.post("", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        reply = await get_ai_response(request.message)

        result = await chat_collection.insert_one({
            "user_message": request.message,
            "bot_reply": reply,
            "timestamp": datetime.utcnow()
        })

        print("Inserted ID:", result.inserted_id)

        return {"reply": reply}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))