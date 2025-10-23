import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [nameInputValue, setNameInputValue] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const connect = (name) => {
    if (!name.trim()) return;
    setUsername(name);
    setShowNameInput(false);

    const script = document.createElement("script");
    script.src = "https://cdn.socket.io/4.5.4/socket.io.min.js";
    script.onload = () => {
      const socket = window.io("http://localhost:3000", {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
      });

      socket.on("connect", () => {
        setConnected(true);
        socket.emit("join", { username: name });
      });

      socket.on("message", (data) => {
        setMessages((prev) => [...prev, data]);
      });

      socket.on("disconnect", () => {
        setConnected(false);
        setShowNameInput(true);
      });

      socket.on("connect_error", () => {
        setConnected(false);
        setShowNameInput(true);
      });

      socketRef.current = socket;
    };
    document.head.appendChild(script);
  };

  const sendMessage = () => {
    if (!input.trim() || !socketRef.current || !connected) return;

    socketRef.current.emit("send_message", {
      username,
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setInput("");
  };

  if (showNameInput) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Chat App</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && connect(nameInputValue)}
            className="w-full p-3 mb-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => connect(nameInputValue)}
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
          >
            Join Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Chat Room</h1>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              connected ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <span className="text-sm">{username}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.username === username ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] min-w-[100px] p-3 break-words ${
                msg.username === username
                  ? "bg-blue-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg shadow-md"
                  : "bg-gray-200 text-gray-900 rounded-tr-lg rounded-tl-lg rounded-br-lg shadow-sm"
              }`}
            >
              {msg.username !== username && (
                <p className="text-xs font-semibold mb-1 text-gray-700">
                  {msg.username}
                </p>
              )}
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-[10px] mt-1 ${
                  msg.username === username ? "text-gray-200" : "text-gray-500"
                } text-right`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 flex gap-2 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={!connected}
          className={`p-3 rounded-md font-bold text-white ${
            connected
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}
