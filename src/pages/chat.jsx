import React, { useState } from "react";
import "../components/ChatApp.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "other", text: "Hello!", time: "10:38 PM" },
    { sender: "other", text: "I can only give it to you in Rs. 150 only.", time: "11:21 PM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [
      ...messages,
      { sender: "self", text: newMessage, time: getCurrentTime() },
    ];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <img
          src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" // Replace with the actual profile picture URL
          alt="Profile"
          className="profile-pic"
        />
        <div className="chat-info">
          <h3 className="person-name">Nilakshi AI ML '27</h3>
          <p className="status">Online</p>
        </div>
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "self" ? "self-message" : "other-message"}`}
          >
            <span className="text">{msg.text}</span>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
