from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from your React app

@app.route('/api/about', methods=['GET'])
def about():
    return jsonify({
         "description": "Bella was a joyful, sweet soul who inspired this site.",
        "photoUrl": "https://yourdomain.com/images/bella.jpg"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8000)
