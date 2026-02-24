import os
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
MONGO_URL = os.getenv("MONGO_URL")

if not OPENROUTER_API_KEY:
    raise Exception("OPENROUTER_API_KEY missing in .env")

if not MONGO_URL:
    raise Exception("MONGO_URL missing in .env")