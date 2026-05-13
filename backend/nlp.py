# nlp.py (lightweight fake RAG)
STORE = []

def add_documents(docs):
    global STORE
    STORE.extend(docs)

def retrieve(query, top_k=3):
    results = []
    for doc in STORE:
        score = sum(1 for w in query.lower().split() if w in doc["text"].lower())
        results.append((doc, score))
    results.sort(key=lambda x: x[1], reverse=True)
    return results[:top_k]
