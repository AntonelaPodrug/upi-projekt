var conversationCount = 0;
var conversations = {}; 

function loadConversation(conversationId, contactName) {
  var chatBox = document.getElementById('chat-box-' + conversationId);

  hideAllChatBoxes();

  chatBox.style.display = 'block';

  if (conversations[conversationId]) {
    chatBox.innerHTML = conversations[conversationId];
  }
  document.getElementById('contact-name').textContent = contactName;

}

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var chatBox = getCurrentChatBox();
  var message = messageInput.value;
  var conversationId = chatBox.getAttribute('data-conversation-id');

  if (message.trim() !== '') {
    var newMessage = document.createElement('div');
    newMessage.className = 'message sent';
    newMessage.innerHTML = '<strong>You:</strong> ' + message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = '';

    conversations[conversationId] = chatBox.innerHTML;

    setTimeout(function () {
      sendAutomaticResponse();
    }, 1000); 
  }
}

function sendAutomaticResponse() {
  var chatBox = getCurrentChatBox();
  var newMessage = document.createElement('div');
  newMessage.className = 'message received';
  
  var response = Math.random() < 0.5 ? 'Yes' : 'No';
  
  newMessage.innerHTML = '<strong>Instruktor:</strong> ' + response;
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  var conversationId = chatBox.getAttribute('data-conversation-id');
  conversations[conversationId] = chatBox.innerHTML;
}

var chatBox = getCurrentChatBox();

chatBox.addEventListener('click', function () {
  var conversationId = this.getAttribute('data-conversation-id');
  if (conversationId) {
    loadConversation(conversationId);
  }
});

function getCurrentChatBox() {
  var conversationId = document.querySelector('.chat-box[style="display: block;"]').getAttribute('data-conversation-id');
  return document.getElementById('chat-box-' + conversationId);
}

function hideAllChatBoxes() {
  var chatBoxes = document.querySelectorAll('.chat-box');
  for (var i = 0; i < chatBoxes.length; i++) {
    chatBoxes[i].style.display = 'none';
  }
}

function initializeConversation() {
  loadConversation(1, 'Ime Kontakta 1'); 
}


window.onload = initializeConversation;
