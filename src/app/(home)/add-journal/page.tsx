'use client'

import Image from 'next/image'
import Link from 'next/link'

import { journalEmojis } from '@/constants'
import { IoIosArrowBack } from 'react-icons/io'
import { MdAdd } from "react-icons/md";

const Page = () => {
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

        <form className='md:p-10 mt-10 md:mt-0'>
            <div>
                <p className='font-semibold my-5 text-xl'>Let's write about it</p>
                <textarea placeholder='Type in here...' className='bg-[#906146] placeholder-white w-full rounded-3xl text-white p-5' cols={30} rows={10}>
                </textarea>
            </div>
            <div className='my-10'>
                <p className='font-semibold text-lg'>How are you feeling?</p>
                <div className='flex items-center gap-3 mt-3'>
                    {journalEmojis.map((emoji)=> (
                        <Image key={emoji} className='cursor-pointer w-10 h-10' src={emoji} width={50} height={50} alt='emoji' />
                    ))}
                </div>
            </div>
            <div className='font-semibold text-lg'>
                <p>Whats affecting your mood?</p>
                <div className='flex items-center gap-2 mt-5'>
                    <p className='text-sm font-normal bg-[#707070] p-2 text-white w-20 text-center  rounded-full'>Work</p>
                    <p className='text-sm font-normal bg-[#707070] p-2 text-white w-20 text-center  rounded-full'>Exercise</p>
                    <p className='text-sm font-normal bg-[#707070] p-2 text-white w-20 text-center  rounded-full'>Family</p>
                </div>
            </div>
            <div className='w-full flex justify-center my-20 mb-20'>
                <button className='bg-primary p-5 text-white shadow-lg font-bold flex items-center text-xl w-full max-w-[30em] justify-center gap-3 rounded-full'>Create journal <MdAdd className='text-2xl' /></button>
            </div>
        </form>
    </section>
  )
}

export default Page