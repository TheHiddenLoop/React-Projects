import React, { useState, useEffect, useRef } from 'react';

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [nameInputValue, setNameInputValue] = useState('');
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const connect = (name) => {
    if (!name.trim()) {
      alert('Please enter a name');
      return;
    }

    setUsername(name);
    setShowNameInput(false);

    const script = document.createElement('script');
    script.src = 'https://cdn.socket.io/4.5.4/socket.io.min.js';
    script.onload = () => {
      const socket = window.io('http://localhost:3000', {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
      });

      socket.on('connect', () => {
        setConnected(true);
        socket.emit('join', { username: name });
      });

      socket.on('message', (data) => {
        setMessages((prev) => [...prev, data]);
      });

      socket.on('disconnect', () => {
        setConnected(false);
        setShowNameInput(true);
      });

      socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
        alert('Connection error. Make sure the server is running on http://localhost:3000');
        setConnected(false);
        setShowNameInput(true);
      });

      socketRef.current = socket;
    };
    script.onerror = () => {
      alert('Failed to load Socket.IO library');
      setShowNameInput(true);
    };
    document.head.appendChild(script);
  };

  const sendMessage = () => {
    if (!input.trim() || !socketRef.current || !connected) {
      return;
    }

    socketRef.current.emit('send_message', {
      username,
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setInput('');
  };

  if (showNameInput) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '400px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Chat App</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box', fontSize: '14px' }}
            onKeyPress={(e) => e.key === 'Enter' && connect(nameInputValue)}
          />
          <button
            onClick={() => connect(nameInputValue)}
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
          >
            Join Chat
          </button>
          <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#666' }}>
            {connected ? 'Connected' : 'Make sure server is running on http://localhost:3000'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: '#333', color: 'white', padding: '15px', borderBottom: '1px solid #ddd' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '20px', margin: '0' }}>Chat Room</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: connected ? '#4caf50' : '#f44336' }}></div>
            <span style={{ fontSize: '12px' }}>{username}</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.length === 0 ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
            <p>No messages yet. Start chatting!</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: msg.username === username ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  maxWidth: '60%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  backgroundColor: msg.username === username ? '#007bff' : '#e0e0e0',
                  color: msg.username === username ? 'white' : 'black',
                }}
              >
                {msg.username !== username && (
                  <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#333' }}>{msg.username}</p>
                )}
                <p style={{ margin: '0', wordBreak: 'break-word' }}>{msg.text}</p>
                <p style={{ fontSize: '11px', marginTop: '5px', margin: '5px 0 0 0', color: msg.username === username ? '#ddd' : '#666' }}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ backgroundColor: 'white', borderTop: '1px solid #ddd', padding: '15px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={!connected}
          style={{ padding: '10px 20px', backgroundColor: connected ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: connected ? 'pointer' : 'not-allowed', fontSize: '14px', fontWeight: 'bold' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}