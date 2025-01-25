from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend access

# Route to provide the video URL
@app.route('/video', methods=['GET'])
def get_video_url():
    
    video_url = "https://www.w3schools.com/html/mov_bbb.mp4"
    return jsonify({"url": video_url})

if __name__ == '__main__':
    app.run(debug=True)
