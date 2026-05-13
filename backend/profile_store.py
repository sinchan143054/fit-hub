import os, json, uuid
DB_FILE = 'profiles.json'

def save_profile(data):
    if os.path.exists(DB_FILE):
        with open(DB_FILE,'r') as f:
            try:
                profiles = json.load(f)
            except:
                profiles = {}
    else:
        profiles = {}
    uid = data.get('id') or uuid.uuid4().hex
    profiles[uid] = data
    with open(DB_FILE,'w') as f:
        json.dump(profiles, f, indent=2)
    return uid

def load_profile(uid):
    if os.path.exists(DB_FILE):
        with open(DB_FILE,'r') as f:
            profiles = json.load(f)
            return profiles.get(uid)
    return None
