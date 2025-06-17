from flask import Flask, request, jsonify
from model import analyze_text

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    result = analyze_text(data["text"])
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=5003)
