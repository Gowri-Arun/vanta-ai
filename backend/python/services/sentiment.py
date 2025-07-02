def analyze_sentiment(message: str) -> str:
    if "angry" in message.lower():
        return "angry"
    elif "sad" in message.lower():
        return "sad"
    else:
        return "neutral"
