// components/ChatDisplay.js
import React from 'react';

const ChatDisplay = ({ messages }: {messages: []}) => {
  return (
    <div className="flex-grow px-4 py-8">
      <div className="flex flex-col space-y-4">
        {messages.map(({sender, text, time}, index) => (
          <div key={index} className={`flex ${sender === 'user' ? 'items-end justify-end' : 'items-start'}`}>
            <div className={`p-3 rounded-lg ${sender === 'user' ? 'bg-green-100' : 'bg-blue-100'}`}>
              <p className="text-sm">{text}</p>
            </div>
            <span className="ml-2 text-xs text-gray-500">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
