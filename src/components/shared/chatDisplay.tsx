// components/ChatDisplay.js
import React from 'react';

const ChatDisplay = ({ messages }: {messages: any}) => {
  return (
    <div className="flex-grow px-4 py-8">
      <div className="flex flex-col space-y-4">
        {messages.map(({sender, text, time}:any, index:number) => (
          <div key={index} className={`flex ${sender === 'user' ? 'items-end justify-end' : 'items-start '}`}>
            <div className={`p-3 rounded-lg flex flex-col ${sender === 'user' ? 'bg-green-100 items-end' : 'bg-blue-100 items-start'}`}>
              <p className="text-sm">{text}</p>
              <span className=" text-xs text-gray-500">{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
