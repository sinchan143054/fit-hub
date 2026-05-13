# summarizer.py
import re

def summarize_text(text: str, mode="short"):
    text = text.strip()
    sentences = re.split(r'(?<=[.!?]) +', text)

    if mode == "short":
        return text[:120] + ("..." if len(text) > 120 else "")

    if mode == "medium":
        return " ".join(sentences[:3])

    if mode == "long":
        return " ".join(sentences[:6])

    return text
