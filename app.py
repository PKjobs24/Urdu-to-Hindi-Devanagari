from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Ye line batati hai ke humara 'indo_arabic_transliteration' folder kahan hai
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '.')))

# --- YAHAN CHANGE KIYA GAYA HAI ---
# Humne 'script_convert' (Basic) ki jagah 'online_transliterate' (Advanced) ko import kiya hai
from indo_arabic_transliteration.sangam_api import online_transliterate

# Flask server banayein
app = Flask(__name__)
CORS(app)  # Ye aapki GitHub website ko is server se baat karne ki ijazat dega

@app.route('/')
def home():
    # Ye sirf check karne ke liye hai ke server chal raha hai
    return "Urdu-Hindi Backend Server is running."

@app.route('/convert', methods=['POST'])
def convert_text():
    try:
        data = request.get_json()
        if 'text' not in data:
            return jsonify({'error': 'No text provided'}), 400

        urdu_text = data['text']

        # --- YAHAN CHANGE KIYA GAYA HAI ---
        # Hum ab 'online_transliterate' function call kar rahe hain
        hindi_text = online_transliterate(urdu_text, 'ur-PK', 'hi-IN')

        return jsonify({'converted_text': hindi_text})

    except Exception as e:
        # Error log karein taake hum debug kar sakein
        print(f"Error during conversion: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Server ko run karein
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
