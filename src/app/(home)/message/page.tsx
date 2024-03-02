'use client'

import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import dp from '@/public/images/profile.png';

const Page = () => {
   
  return (
    <section className='md:p-20 p-10'>
        <div className='flex items-center mb-10 justify-between text-brown-80'>
            <h1 className='font-bold text-3xl'>Message</h1>
            <FiSearch  className=' w-7 h-7'/>
        </div>
        <div className='w-full'>
            <div className='p-5 mt-3 rounded-xl'>
                    <div className='flex items-center border-[#a2a2a2] py-4 pr-5 justify-between'>
                        <div className='flex items-center gap-3 text-brown-80'>
                            <Image src={dp} width={70} height={70} alt='image' className='rounded-full' />
                            <div>
                                <p className='font-semibold text-md'>Dr. Emily Patel, Psy.D., Licensed Clinical Psychologist</p>
                                <p className='opacity-50 text-sm'>Hello Dr. Patel, Im interested in scheduling an appointment to discuss some issues Ive been facing.</p>
                            </div>
                        </div>
                        <div className='p-3 rounded-md text-brown-80 opacity-85 text-sm cursor-pointer'>
                            <p>Message</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[#a2a2a2] py-4 pr-5 justify-between'>
                        <div className='flex items-center gap-3 text-brown-80'>
                            <Image src={dp} width={70} height={70} alt='image' className='rounded-full' />
                            <div>
                                <p className='font-semibold text-md'>Dr. Marcus Johnson, MD, Board-Certified Psychiatrist</p>
                                <p className='opacity-50 text-sm'>Hi Dr. Johnson, Im feeling a bit nervous about starting therapy.</p>
                            </div>
                        </div>
                        <div className='p-3 rounded-md text-brown-80 opacity-85 text-sm cursor-pointer'>
                            <p>Message</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[#a2a2a2] py-4 pr-5 justify-between'>
                        <div className='flex items-center gap-3 text-brown-80'>
                            <Image src={dp} width={70} height={70} alt='image' className='rounded-full' />
                            <div>
                                <p className='font-semibold text-md'>Dr. Sophia Lee, Ph.D., Licensed Marriage and Family Therapist</p>
                                <p className='opacity-50 text-sm'>Hello Dr. Lee, I wanted to update you on how Ive been doing since our last session</p>
                            </div>
                        </div>
                        <div className='p-3 rounded-md text-brown-80 opacity-85 text-sm cursor-pointer'>
                            <p>Message</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[#a2a2a2] py-4 pr-5 justify-between'>
                        <div className='flex items-center gap-3 text-brown-80'>
                            <Image src={dp} width={70} height={70} alt='image' className='rounded-full' />
                            <div>
                                <p className='font-semibold text-md'>Dr. Michael Thompson, Ed.D., Licensed Professional Counselor</p>
                                <p className='opacity-50 text-sm'> Hi Dr. Thompson, Ive been thinking a lot about my childhood lately, and I believe its affecting my current relationships.</p>
                            </div>
                        </div>
                        <div className='p-3 rounded-md text-brown-80 opacity-85 text-sm cursor-pointer'>
                            <p>Message</p>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Page