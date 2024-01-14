// Assuming userType is already defined
var userType = localStorage.getItem('userType');
const driverEmail = localStorage.getItem('driverEmail');
console.log(driverEmail)
var currentDate = getCurrentDate(); // Initialize the current date

// Initialize or retrieve the conversation from local storage based on the driver's email
var conversationKey = `conversation_${driverEmail}`;
var conversation = JSON.parse(localStorage.getItem(conversationKey)) || [];

function saveConversation() {
  localStorage.setItem(conversationKey, JSON.stringify(conversation));
}

function sendMessage() {
  var messageInput = document.getElementById('message-input');
  var message = messageInput.value.trim();

  if (message !== '') {
    var userName = localStorage.getItem('name') || 'User';
    var newMessage = {
      type: 'sent',
      content: `<strong>(${userType}) ${userName}:</strong> ${message}`,
      date: getCurrentDate(),
      time: getCurrentTime()
    };

    conversation.push(newMessage);
    saveConversation();

    appendMessage(newMessage);

    messageInput.value = '';
  }
}

function sendYes() {
  var userName = localStorage.getItem('name') || 'User';
  var newMessage = {
    type: 'sent',
    content: `<strong>(${userType}) ${userName}:</strong> Yes`,
    date: getCurrentDate(),
    time: getCurrentTime()
  };

  conversation.push(newMessage);
  saveConversation();

  appendMessage(newMessage);
}

function sendNo() {
  var userName = localStorage.getItem('name') || 'User';
  var newMessage = {
    type: 'sent',
    content: `<strong>(${userType}) ${userName}:</strong> No`,
    date: getCurrentDate(),
    time: getCurrentTime()
  };

  conversation.push(newMessage);
  saveConversation();

  appendMessage(newMessage);
}

function appendMessage(message) {
  var chatBox = document.getElementById('chat-box');
  var newMessage = document.createElement('div');
  newMessage.className = 'message ' + message.type;

  // Display date if it's a new day
  if (message.date !== currentDate) {
    var dateElement = document.createElement('div');
    dateElement.className = 'message-date';
    dateElement.textContent = message.date;
    chatBox.appendChild(dateElement);
    currentDate = message.date; // Update currentDate
  }

  var contentElement = document.createElement('div');
  contentElement.innerHTML = `${message.content} <span class="message-time">${message.time}</span>`;
  newMessage.appendChild(contentElement);

  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getCurrentDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

function getCurrentTime() {
  var now = new Date();
  var options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return now.toLocaleTimeString('en-US', options);
}

function loadConversation() {
  const driverEmailFromUrl = getDriverEmailFromUrl();
  if (!driverEmailFromUrl) {
    console.error('Driver email not found in the URL.');
    return;
    
  }

  conversationKey = `conversation_${driverEmailFromUrl}`;
  conversation = JSON.parse(localStorage.getItem(conversationKey)) || [];

  conversation.forEach(function (message) {
    appendMessage(message);
  });
}

function getDriverEmailFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const driverEmail = urlParams.get('email');

  console.log('Driver email from URL:', driverEmail); // Add this line for debugging

  return driverEmail;
}


window.goBack = function () {
  window.history.back();
};

// Load the conversation when the page loads
loadConversation();
