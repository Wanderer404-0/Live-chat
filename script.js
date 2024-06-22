// Initialize username as null
var username = null;

function setUsername() {
    var usernameInput = document.getElementById("username-input");
    var enteredUsername = usernameInput.value.trim();

    if (enteredUsername === "") {
        alert("Please enter a username");
        return;
    }

    username = enteredUsername;

    // Hide username input and show message input
    usernameInput.style.display = "none";
    document.getElementById("message-input").style.display = "inline-block";
}

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();

    if (message === "") {
        alert("Please enter a message");
        return;
    }

    if (username === null) {
        alert("Please enter a username first");
        return;
    }

    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = username + ": " + message;
    chatBox.appendChild(messageElement);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
