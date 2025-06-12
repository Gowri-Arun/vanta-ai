# detector.py

import os

def scan_file(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError("File not found")

    # Dummy scan logic — replace with real model later
    # Simulate confidence values
    result = {
        "file": os.path.basename(file_path),
        "is_deepfake": False,  # or True
        "confidence": 0.07,    # 0.0 to 1.0 scale
        "message": "Low likelihood of manipulation"
    }

    return result
