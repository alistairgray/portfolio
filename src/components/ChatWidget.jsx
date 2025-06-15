import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi, I’m Alistair‑Bot. Ask me anything about Alistair Gray’s experience.',
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      }).then(r => r.json());

      const reply = res.choices?.[0]?.message || {
        role: 'assistant',
        content: 'Sorry, something went wrong.',
      };
      setMessages([...newMessages, reply]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Network error.' }]);
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        <FaRobot size={24} />
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.content}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything…"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
