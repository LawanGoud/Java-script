let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");

function getReplyFromChatbot() {
  let noOfChatbotMsgs = chatbotMsgList.length;
  let chatbotMsg =
    chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

  let msgContainer = document.createElement("div");
  msgContainer.classList.add("msg-from-chatbot-container");
  chatContainer.appendChild(msgContainer);

  let chatbot = document.createElement("span");
  chatbot.classList.add("msg-from-chatbot");
  chatbot.textContent = chatbotMsg;
  msgContainer.appendChild(chatbot);
}

function sendMsgToChatbot() {
  let userMsgs = userInput.value;

  let msgContainer = document.createElement("div");
  msgContainer.classList.add("msg-to-chatbot-container");
  chatContainer.appendChild(msgContainer);

  let userMsg = document.createElement("span");
  userMsg.classList.add("msg-to-chatbot");
  userMsg.textContent = userMsgs;
  msgContainer.appendChild(userMsg);

  userInput.value = "";
  getReplyFromChatbot();
}
