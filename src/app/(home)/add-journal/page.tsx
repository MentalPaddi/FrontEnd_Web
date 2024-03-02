'use client'

import Image from 'next/image'
import Link from 'next/link'

import { journalEmojis } from '@/constants'
import { IoIosArrowBack } from 'react-icons/io'
import { journalIcons } from '@/constants';
import { useState } from 'react';
import { useCreateJournalMutation } from '@/api/authApi'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const currentEmotions = ["overjoyed", "happy", "neutral", "sad", "angry"]

interface Inputs {
    journal: string;
}

const Page = () => {
    const [journalIconEmoji, setJournalIconEmoji] = useState<any>(journalEmojis)
    const [affectingMood, setAffectiongMood] = useState('')
    const [currentEmotion, setCurrentEmotion] = useState('');
    const [createJournal] = useCreateJournalMutation();
    const [loading, setLoading] = useState(false);
    const router = useRouter()


    const handleEmoji = (index: number) => {
        setCurrentEmotion(currentEmotions[index]);
        const changed = [...journalEmojis];
        changed[index] = journalIcons[index];
        setJournalIconEmoji(changed);
    }

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = async ({ journal }: { journal: string }) => {
        if(!currentEmotion) return toast.error("you've not told us how you're feeling 😢")
        if(!affectingMood) return toast.error("you've not told us whats affecting you 😌")
        
        setLoading(true)
        const postJournal = await createJournal({
            journal_text: journal,
            feeling: currentEmotion,
            mood: affectingMood
        })
        setLoading(false)
        router.push('/library')
    };


  return (
    <section className='p-10 md:p-20'>
        <nav>
        <Link href='/journal'>
            <div className="font-bold flex items-center text-[#333333] gap-2 text-2xl">
              <IoIosArrowBack />
              <p>Add new journal</p>
            </div>
        </Link>
        </nav>

        <form className='md:p-10 mt-10 md:mt-0' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className='font-semibold my-5 text-xl'>Lets write about it</p>
                <textarea 
                    placeholder='Type in here...' 
                    className='bg-[#906146] placeholder-white w-full rounded-3xl text-white p-5' 
                    cols={30} 
                    rows={10}
                    {...register("journal", { required: true, maxLength: 300 })} 
                >
                </textarea>
            </div>
            <div className='my-10'>
                <p className='font-semibold text-lg'>How are you feeling?</p>
                <div className='flex items-center gap-3 mt-3'>
                    {journalIconEmoji.map((emoji:any, i:number)=> (
                        <Image key={i} className='cursor-pointer w-10 h-10' src={emoji} width={50} height={50} alt='emoji' onClick={() => handleEmoji(i)} />
                    ))}
                </div>
            </div>
            <div className='font-semibold text-lg'>
                <p>Whats affecting your mood?</p>
                <div className='flex items-center gap-2 mt-5'>
                    <p onClick={()=> setAffectiongMood('work')} className={`text-sm font-normal w-20 text-center p-2 rounded-full ${affectingMood === 'work' ? 'bg-primary text-white' : 'bg-[#707070] text-white' }`}>Work</p>
                    <p onClick={()=> setAffectiongMood('exercise')} className={`text-sm font-normal p-2 w-20 text-center rounded-full ${affectingMood === 'exercise' ? 'bg-primary text-white' : 'bg-[#707070] p-2 text-white' }`}>Exercise</p>
                    <p onClick={()=> setAffectiongMood('family')} className={`text-sm font-normal p-2 w-20 text-center rounded-full ${affectingMood === 'family' ? 'bg-primary text-white' : 'bg-[#707070] p-2 text-white' }`}>Family</p>
                </div>
            </div>
            <div className='w-full flex justify-center my-20 mb-20'>
                <button className='bg-primary p-5 text-white shadow-lg font-bold flex items-center text-xl w-full max-w-[30em] justify-center gap-3 rounded-full'>{loading ? 'Loading...' : 'Save'}</button>
            </div>
        </form>
    </section>
  )
}

export default Page