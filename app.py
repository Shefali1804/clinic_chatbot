from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple chatbot responses
responses = {
    "hello": "Hello! How can I assist you today?",
    "hii": "Hello! How can I assist you today?",
    "appointment": "Sure, I can help you schedule an appointment. Please provide your name and preferred date/time.",
    "hours": "Our clinic is open Monday to Friday from 9:00 AM to 6:00 PM.",
    "what is the location?": "Our clinic is located at 123 Main Street, Delhi, India.",
    "booking": "Please provide your contact details: Phone no and Email Id:.",
    "default": "I'm sorry, I don't understand. Please try asking another question.",
}

def chatbot_response(input_text):
    input_text = input_text.lower()
    response = responses.get(input_text, responses["default"])
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chatbot', methods=['POST'])
def handle_chat():
    user_input = request.json.get('user_input')
    bot_response = chatbot_response(user_input)
    return jsonify({'bot_response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
