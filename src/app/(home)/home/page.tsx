'use client'

import Image from 'next/image';
import message from '@/public/assets/message-notif.svg';
import chat from "@/public/assets/chat.svg";
import robot from '@/public/assets/robot.svg';
import add from '@/public/assets/add.svg';
import { useAppSelector } from '@/redux/hooks';
import { selectAssessments } from '@/redux/features/assessmentSlice';

import sleep from '@/public/moodIcons/sleep.svg';
import journal from '@/public/assets/journal-emoji.svg';
import stress from '@/public/moodIcons/stress.svg';
import sad from '@/public/moodIcons/sad.svg'

const Page = () => {
  const { assessments } = useAppSelector(selectAssessments)
  console.log(assessments)

  return (
    <main>
      <section className="bg-[#045481] w-full rounded-b-[4em] md:rounded-b-[6em] p-10 md:p-20">
        <div className="w-[88%] mx-auto ">
          <div className="flex items-center my-2">
            <div className="rounded-full bg-[#F7F4F2] mr-3 h-20 w-20"></div>
            <div>
              <h2 className="text-white font-bold text-xl">Hi, Neil</h2>
              <p className='text-[#94F815]'>Happy</p>
            </div>
          </div>
          <div>
            <input type="text" className="w-full p-3 bg-[#045481] border-b-2 text-white outline-none" placeholder='Search anything' />
          </div>
        </div>
      </section>
      
      <section className="p-10 w-full md:w-[70%] mx-auto">
        <p className="font-bold text-md my-5">AI Therapy Chatbot</p>
        <div className='flex flex-col items-center'>
          <div className="bg-[#0F8BD0] flex justify-between text-white rounded-3xl h-[16em] w-full p-10">
            <div className='font-semibold'>
              <div className='flex items-center'>
                <Image src={message} alt='message' />
                <p className='font-semibold text-xl pl-2'>1293</p>
              </div>
              <p>Conversation</p>
              <div className='flex items-center py-5'>
                <Image src={chat} alt='chat' />
                <p>20 Chat left</p>
              </div>
            </div>
            <div>
              <Image src={robot} alt='robot'/>
            </div>
          </div>
          <Image src={add} alt='add' className='relative bottom-7'/>
        </div>
      </section>

      <section className='p-10 pt-0 w-full md:w-[70%] mx-auto'>
        <p className='font-bold text-md my-5'>Tracker</p>
        <div className='w-full flex flex-col gap-4'>
          <div className='rounded-3xl flex items-center gap-3 bg-[#ADD8E6] w-full p-4'>
            <div className='w-[3em] h-[3em] flex items-center justify-center bg-white rounded-xl'>
              <Image src={sleep} alt='sleep'  width={30} height={30}/>
            </div>

            <div>
              <p className='font-bold'>Sleep Quality</p>
              <p className='text-[#806A6A]'>Insomniac (3h Avg)</p>
            </div>
          </div>

          <div className='rounded-3xl flex items-center gap-3 bg-[#ADD8E6] w-full p-4'>
            <div className='w-[3em] h-[3em] flex items-center justify-center bg-white rounded-xl'>
            <Image src={stress} alt='sleep' width={30} height={30}/>
            </div>

            <div>
              <p className='font-bold'>Sleep Quality</p>
              <div className='my-1 flex items-center gap-1'>
                <div className='w-10 h-1 bg-[#FFBD19] rounded-full'></div>
                <div className='w-10 h-1 bg-[#FFBD19] rounded-full'></div>
                <div className='w-10 h-1 bg-[#FFBD19] rounded-full'></div>
                <div className='w-10 h-1 bg-[#D9D9D9] rounded-full'></div>
                <div className='w-10 h-1 bg-[#D9D9D9] rounded-full'></div>
              </div>
              <p className='text-[#806A6A]'>Lvl 3 (Normal)</p>
            </div>
          </div>

          <div className='rounded-3xl flex items-center gap-3 bg-[#ADD8E6] w-full p-4'>
            <div className='w-[3em] h-[3em] flex items-center justify-center bg-white rounded-xl'>
            <Image src={sad} alt='sleep' width={30} height={30}/>
            </div>

            <div className='flex flex-col items-center'>
              <p className='font-bold'>Mood Tracker</p>
              <button className=' p-1 w-[6em] text-white rounded-full bg-[#ED7E1C]'>Sad</button>
            </div>
          </div>

          <div className='rounded-3xl flex items-center gap-3 bg-[#ADD8E6] w-full p-4'>
            <div className='w-[3em] h-[3em] flex items-center justify-center bg-white rounded-xl'>
            <Image src={journal} alt='sleep' width={30} height={30}/>
            </div>

            <div>
              <p className='font-bold'>Journal</p>
              <p className='text-[#806A6A]'>43 Day Streak</p>
            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}

export default Page