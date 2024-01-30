function sendMessage() {
    const userMessage = document.getElementById('user_input').value;
    document.getElementById('user_input').value = '';
    const chatBox = document.getElementById('chat');
    
    // User message
    chatBox.innerHTML += '<p class="user-message">You: ' + userMessage + '</p>';
    
    // Clinic message (bot response)
    fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_input: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        chatBox.innerHTML += '<p class="clinic-message">Clinic: ' + data.bot_response + '</p>';
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    });
}

// Initialize the conversation with a welcome message
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat');
    const welcomeMessage = "Welcome to the clinic! How can we assist you today?";
    
    // Clinic welcome message
    chatBox.innerHTML += '<p class="clinic-message">Clinic: ' + welcomeMessage + '</p>';
});
