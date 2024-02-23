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
import { selectAuth } from '@/redux/features/authSlice';
import { redirect } from 'next/navigation';
import { IoNotifications } from 'react-icons/io5';
import moodChart from '@/public/moodIcons/mood-chart.svg';
import Insomniac from '@/public/moodIcons/insomniac.svg';
import stressLevel from '@/public/moodIcons/stress-level.svg';
import journalIcon from '@/public/assets/journal-icon.svg';
import libraryIcon from '@/public/assets/library-icon.svg';
import quoteIcon from '@/public/assets/quote-icon.svg';
import modivationIcon from '@/public/assets/meditation-Icon.svg';
import CircularProgressBar from '@/components/shared/circulerProgress';

const Page = () => {
  const { signedUpUser } = useAppSelector(selectAuth);

  const { data } = signedUpUser;

  if(!data) return redirect('sign-in');

  return (
    <main>
      <section className="bg-[#045481] w-full rounded-b-[4em] md:rounded-b-[6em] p-10 md:p-20">
        <div>
          <div className='w-full flex items-center justify-between mb-5'>
            <div className='rounded-full bg-white h-20 w-20'></div>
            <div>
              <IoNotifications className='text-white w-10 h-10' />
            </div>
          </div>
          <div className='text-white'>
            <p className='text-3xl'>Good Day</p>
            <p className='font-bold text-2xl'>{data.first_name}!</p>
            <p className='mt-5'>How are you feeling today?</p>
          </div>
          <div className='flex items-center gap-3 my-4 overflow-x-auto'>
            <div className='h-20 w-20 bg-white rounded-lg'></div>
            <div className='h-20 w-20 bg-white rounded-lg'></div>
            <div className='h-20 w-20 bg-white rounded-lg'></div>
            <div className='h-20 w-20 bg-white rounded-lg'></div>
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

      <section className='p-10 pt-0 w-full md:w-[70%] mx-auto'>
        <p className='font-bold text-md my-5'>Mental Health Metrics</p>
        <div className='flex gap-5 h-[13em] overflow-x-auto'>
          <div className='p-3 w-[13em] bg-slate-600 rounded-xl'>
            <p className='text-white font-semibold w-[12em]'>Mental Score</p>
            <div className='w-full flex justify-center mt-3'>
              <CircularProgressBar percentage={80} radius={60} strokeWidth={10} color='#08EF49' />
            </div>
          </div>
          <div className='h-full text-white p-3 bg-[#ED7E1C] rounded-xl'>
            <p className='font-semibold w-[12em]'>Mood</p>
            <p className='font-bold text-3xl'>Sad</p>
            <div className='p-2 w-full items-center justify-center flex mt-3'>
              <Image src={moodChart} width={130} height={130} className='h-full' alt='mood-chart' />
            </div>
          </div>
          <div className='h-full p-3 text-white bg-[#2ECC71] rounded-xl'>
            <p className='font-semibold w-[12em]'>Stress Level</p>
            <p className='text-2xl font-bold'>Low stress</p>
            <div className='w-full flex items-center justify-center mt-4'>
              <Image src={stressLevel} width={100} height={100} alt='stress level' />
            </div>
          </div>
          <div className='h-full p-3 text-white bg-[#E74C3C] rounded-xl'>
            <p className='font-semibold w-[12em]'>Sleep quality</p>
            <p className='text-2xl font-bold'>Insomniac</p>
            <div className='w-full flex items-center justify-center mt-4'>
              <Image src={Insomniac} width={100} height={100} alt='insomniac' />
            </div>
          </div>
        </div>
      </section>

      <section className='p-10 pt-0 w-full md:w-[70%] mx-auto'>
        <div className='flex items-center justify-around'>
          <div className='flex gap-2 cursor-pointer items-center shadow-md p-3 rounded-xl bg-[#F4F3F1]'>
            <Image src={journalIcon} width={30} height={30} alt='journal'/>
            <p className='font-bold text-brown-80'>Journal</p>
          </div>
          <div className='flex gap-2 cursor-pointer items-center shadow-md p-3 rounded-xl bg-[#F4F3F1]'>
            <Image src={libraryIcon} width={30} height={30} alt='journal'/>
            <p className='font-bold text-brown-80'>Library</p>
          </div>
        </div>

        <div className='p-10 w-full max-w-[25em] bg-white mx-auto py-12 my-7 text-[#707070] text-2xl rounded-3xl'>
          <p className='font-bold mb-2'>Qoute of the day</p>
          <p>“It is better to conquer yourself than to win a thousand battles”</p>
          <Image className='relative left-[90%] mt-2' src={quoteIcon} width={40} height={40}  alt='quote'/>
        </div>

        <div className='p-10 w-full flex items-center justify-between bg-[#55A06F] mx-auto my-10 text-white rounded-3xl'>
            <div>
              <p className='font-bold text-3xl'>Plan Expired</p>
              <p className='w-40 my-5'>Get back chat access and session credits</p>
              <p className='font-bold text-lg'>Buy More</p>
            </div>
            <div>
              <Image src={modivationIcon} width={100} height={100} alt='motivation' />
            </div>
        </div>
      </section>
    </main>
  )
}

export default Page