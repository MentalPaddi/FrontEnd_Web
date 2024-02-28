// pages/chat.js
import React from 'react';
import ChatDisplay from '@/components/shared/chatDisplay';
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';

const ChatPage = () => {
  const messages = [
    { text: 'Hello there!', sender: 'bot', time: '12:34 PM' },
    { text: 'Hi! How can I help you?', sender: 'user', time: '12:35 PM' }
  ];

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <Link href='/message'>
          <h1 className="text-lg flex items-center font-bold">
              <IoIosArrowBack />
              <p>Hillary</p>
          </h1>
        </Link>
      </div>

      <ChatDisplay messages={messages} />

      <div className="bg-white border-t border-gray-200 py-4 px-4 flex items-center gap-4 pb-10">
        <input type="text" placeholder="Type your message..." className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
