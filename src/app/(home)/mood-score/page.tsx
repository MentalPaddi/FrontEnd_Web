import MoodHistory from '@/components/shared/moodHistory';
import MoodScoreChart from '@/components/shared/moodScoreChart';
import leftArrow from '@/public/assets/ArrowLeft.svg';
import Image from 'next/image';

const Page = () => {
  return (
    <section className='bg-[#F6F3F0] p-5'>
        <nav className='w-full gap-3 flex items-center'>
          <Image src={leftArrow} alt='arrow-left' />
          <p className='font-semibold'>Mood</p>
        </nav>
        <div className=''>
            <div className='p-10'>
                <h1 className='text-4xl font-bold text-brown-80'>Mood Score</h1>
                <p className='text-[#B0A2A2] text-sm font-semibold'>See your mood score insight</p>
            </div>
            <div>
              <MoodScoreChart />
              <MoodHistory />          
            </div>
        </div>
    </section>
  )
}

export default Page;