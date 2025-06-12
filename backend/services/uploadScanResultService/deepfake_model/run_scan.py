# run_scan.py

import sys
import json
from .detector import scan_file  # or your actual function

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(json.dumps({"success": False, "message": "File path not provided"}))
        sys.exit(1)

    file_path = sys.argv[1]
    try:
        result = scan_file(file_path)  # should return a dictionary
        print(json.dumps({"success": True, "result": result}))
    except Exception as e:
        print(json.dumps({"success": False, "message": str(e)}))
        sys.exit(1)
