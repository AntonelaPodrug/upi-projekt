var conversationCount = 0;

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var chatBox = document.getElementById('chat-box');
  var message = messageInput.value;

  if (message.trim() !== '') {
    var newMessage = document.createElement('div');
    newMessage.className = 'message sent';
    newMessage.innerHTML = '<strong>You:</strong> ' + message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = '';
  }
}

function sendYes() {
  var chatBox = document.getElementById('chat-box');
  var newMessage = document.createElement('div');
  newMessage.className = 'message sent';
  newMessage.innerHTML = '<strong>You:</strong> Yes';
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendNo() {
  var chatBox = document.getElementById('chat-box');
  var newMessage = document.createElement('div');
  newMessage.className = 'message sent';
  newMessage.innerHTML = '<strong>You: </strong> No';
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function loadConversation() {
  var slider = document.getElementById('conversation-slider');
  var label = document.getElementById('conversation-label');
  
  // Increment conversationCount to create a new chat box
  conversationCount++;

  label.textContent = 'Conversation ' + conversationCount;
  var chatBox = document.getElementById('chat-box');

  // Clear the chat box when loading a new conversation
  chatBox.innerHTML = '';

  // Simulate an initial received message from "Instruktor"
  var initialMessage = document.createElement('div');
  initialMessage.className = 'message received';
  initialMessage.innerHTML = '<strong>Instruktor:</strong> Peti sat vožnje, 12.01.2024 u 14:00 na Poljudu?';
  chatBox.appendChild(initialMessage);
}
