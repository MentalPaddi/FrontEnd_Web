// pages/chat.js
'use client'

import React from 'react';
import ChatDisplay from '@/components/shared/chatDisplay';
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { LuSendHorizonal } from "react-icons/lu";
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/features/authSlice';

const ChatPage = () => {
  const { userChattingTo } = useAppSelector(selectAuth);

  const { first_name } = userChattingTo[0];

  const messages = [
    { text: 'Hello there!', sender: 'bot', time: '12:34 PM' },
    { text: 'Hi! How can I help you?', sender: 'user', time: '12:35 PM' }
  ];

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <Link href='/message'>
          <h1 className="text-lg flex items-center font-bold">
              <p className='text-brown-80'>{first_name}</p>
          </h1>
        </Link>
      </div>

      <ChatDisplay messages={messages} />

      <div className="bg-white border-t border-gray-200 py-4 px-4 flex items-center gap-4 pb-10">
        <HiOutlineCamera className='w-7 h-7' />
        <input type="text" placeholder="Type your message..." className="w-[90%] border rounded-full p-2 outline-none focus:border-brown-80 bg-[#F2F2F2]" />
        <div className='flex items-center justify-between gap-4'>
          <HiOutlineMicrophone className='w-7 h-7' />
          <LuSendHorizonal className='w-7 h-7' />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
