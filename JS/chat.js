let chatPageInitializationHandler = () => {
  //displaying the user name parallel to chat, also adds up the chat details
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  let chatString = "";
  let timeData;
  document.getElementById("userName").innerHTML = activeUser.name;
  //initializing the local variable for chats
  let allChats = Boolean(localStorage.getItem("allChats"))
    ? localStorage.getItem("allChats")
    : JSON.stringify([]);
  localStorage.setItem("allChats", allChats);
  //JSON parse to the chat variable
  allChats = JSON.parse(localStorage.getItem("allChats"));
  //now for displaying the messages as intented for users
  for (i = 0; i < allChats.length; i++) {
    timeData = allChats[i].messageTime;
    console.log(timeData);
    chatString += `<p>
      <span class="chat-time">[${timeData}]</span>
      <span class="chat-name">${allChats[i].userName} :</span>
      <span class="chat-message">${allChats[i].chatMessage}</span>
      </p>`;
  }
  document.getElementById("chat").innerHTML = chatString;
};

//on Submission handler it store object

let addNewChat = () => {
  event.preventDefault();
  let messageTime = new Date().toString().substring(4, 24);
  let chatMessage = document.getElementById("chatMessage").value;
  let activeUser = JSON.parse(localStorage.getItem("activeUser"));
  //empty field validation
  if (!Boolean(chatMessage.trim())) {
    alert("Enter a message to send!");
    return false;
  }
  //adding the new message to the local Storage
  let allChats = JSON.parse(localStorage.getItem("allChats"));
  allChats.push({
    messageTime: messageTime,
    chatMessage: chatMessage,
    userName: activeUser.name,
  });
  localStorage.setItem("allChats", JSON.stringify(allChats));
  location.reload();
};
