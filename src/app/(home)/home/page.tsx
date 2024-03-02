'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';

import { selectAuth } from '@/redux/features/authSlice';
import { redirect } from 'next/navigation';
import { IoNotifications } from 'react-icons/io5';
import moodChart from '@/public/moodIcons/mood-chart.svg';
import Insomniac from '@/public/moodIcons/insomniac.svg';
import stressLevel from '@/public/moodIcons/stress-level.svg';
import journalIcon from '@/public/assets/journal-icon.svg';
import libraryIcon from '@/public/assets/library-icon.svg';
import quoteIcon from '@/public/assets/quote-icon.svg';
import happy from '@/public/home/Happy.svg';
import calm from '@/public/home/calm.svg';
import manic from '@/public/home/manic.svg';
import angry from '@/public/home/angry.svg'
import CircularProgressBar from '@/components/shared/circulerProgress';

const moods = ['Depressed', 'Sad', 'Neutral', 'Happy', 'Overjoyed']
const qualities = [
  'Excellent',
  'Good',
  'Fair',
  'Poor',
  'Worst'
]

const Page = () => {
  const { signedInUser } = useAppSelector(selectAuth);

  if(!signedInUser) return redirect('sign-in');
  const { mental_score, stress_level, mood, sleep_quality } = signedInUser.assessment_data;

  return (
    <main className='pb-20'>
      <section className="bg-[#045481] rounded-b-2xl w-full p-10 pb-[4em] md:p-20">
        <div>
          <div className='w-full flex items-center justify-between mb-5'>
            <div className='rounded-full bg-white h-20 w-20'></div>
            <div>
              <IoNotifications className='text-white w-10 h-10' />
            </div>
          </div>
          <div className='text-white'>
            <p className='text-3xl'>Good Day</p>
            <p className='font-bold text-2xl'>{signedInUser.first_name}</p>
            <p className='mt-5'>How are you feeling today?</p>
          </div>
          <div className='flex items-center gap-3 mt-3 flex-wrap'>
              <div className='bg-[#EF5DA8] p-4 h-[5em] text-center rounded-lg'>
                <Image src={happy} height={50} width={50} alt='feeling' />
                <p className='text-white relative top-5'>Happy</p>
              </div>
              <div className='bg-[#AEAFF7] p-4 h-[5em] text-center rounded-lg'>
                <Image src={calm} height={50} width={50} alt='feeling' />
                <p className='text-white relative top-6'>calm</p>
              </div>
              <div className='bg-[#A0E3E2] p-4 h-[5em] text-center rounded-lg'>
                <Image src={manic} height={50} width={50} alt='feeling' />
                <p className='text-white relative top-7'>Manic</p>
              </div>
              <div className='bg-[#F09E54] p-4 h-[5em] mt-5 md:mt-0 text-center rounded-lg'>
                <Image src={angry} height={50} width={50} alt='feeling' />
                <p className='text-white relative top-5'>Sad</p>
              </div>
              <div className='bg-[#C3F2A6] p-4 h-[5em] mt-5 md:mt-0 text-center rounded-lg'>
                <Image src={angry} height={50} width={50} alt='feeling' />
                <p className='text-white relative top-5'>Angry</p>
              </div>
          </div>
        </div>
      </section>

      <section className='p-10 pt-0 w-full mt-5 mx-auto'>
        <p className='font-bold text-xl my-5'>Mental Health Metrics</p>
        <div className='flex gap-5 md:h-full h-[15em] overflow-x-scroll md:overflow-hidden md:flex-wrap md:justify-center'>
            <div className='p-3 w-[13em] bg-slate-600 rounded-xl'>
              <p className='text-white font-semibold w-[12em]'>Mental Score</p>
              <div className='w-full flex justify-center mt-3'>
                <CircularProgressBar percentage={mental_score} radius={60} strokeWidth={10} color='#08EF49' />
              </div>
            </div>
            <div className='h-full text-white p-3 bg-[#ED7E1C] rounded-xl'>
              <p className='font-semibold w-[12em]'>Mood</p>
              <p className='font-bold text-2xl'>{moods[mood-1]}</p>
              <div className='p-2 w-full items-center justify-center flex mt-3'>
                <Image src={moodChart} width={130} height={130} className='h-full' alt='mood-chart' />
              </div>
            </div>
          <div className='h-full p-3 text-white bg-[#2ECC71] rounded-xl'>
            <p className='font-semibold w-[12em]'>Stress Level</p>
            <p className='text-2xl font-bold'>{stress_level > 3 ? 'High stress' : 'Low stress'}</p>
            <div className='w-full flex items-center justify-center mt-4'>
              <Image src={stressLevel} width={100} height={100} alt='stress level' />
            </div>
          </div>
          <div className='h-full p-3 text-white bg-[#E74C3C] rounded-xl'>
            <p className='font-semibold w-[12em]'>Sleep quality</p>
            <p className='text-2xl font-bold'>{qualities[sleep_quality-1]}</p>
            <div className='w-full flex items-center justify-center mt-4'>
              <Image src={Insomniac} width={100} height={100} alt='insomniac' />
            </div>
          </div>
        </div>
      </section>

      <section className='p-10 pt-0 w-full md:w-[70%] mx-auto'>
        <div className='flex items-center justify-around'>
          <Link href='/journal'>
            <div className='flex gap-2 cursor-pointer items-center shadow-md p-3 rounded-xl bg-[#F4F3F1]'>
              <Image src={journalIcon} width={30} height={30} alt='journal'/>
              <p className='font-bold text-brown-80'>Journal</p>
            </div>
          </Link>
          <div className='flex gap-2 cursor-pointer items-center shadow-md p-3 rounded-xl bg-[#F4F3F1]'>
            <Image src={libraryIcon} width={30} height={30} alt='journal'/>
            <p className='font-bold text-brown-80'>Library</p>
          </div>
        </div>

        <div className='p-10 w-full max-w-[25em] mx-auto py-12 my-7 text-[#707070] text-2xl rounded-3xl'>
          <p className='font-bold mb-2'>Qoute of the day</p>
          <p className='text-[.75em]'>“It is better to conquer yourself than to win a thousand battles”</p>
          <Image className='relative left-[90%] mt-2' src={quoteIcon} width={40} height={40}  alt='quote'/>
        </div>
      </section>
    </main>
  )
}

export default Page