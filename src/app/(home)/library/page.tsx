import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const Page = () => {
  return (
    <section className='p-10 md:p-20'>
        <nav>
            <Link href='/journal'>
                <div className="font-bold flex items-center text-[#333333] gap-2 text-2xl">
                <IoIosArrowBack />
                <p>Library</p>
                </div>
            </Link>
        </nav>

        <div className='w-full flex items-center text-[#333]'>
            <div className='w-1/2 flex flex-col gap-5 p-5 border-r-2 '>
                <p className='border-2 bg-white p-3 rounded-2xl'>For athletes, high altitude produces two contradictory effects on performance...
                    <p className='font-medium mt-2'>22.09.2024</p>
                </p>
                <p className='border-2 bg-white p-3 rounded-2xl'>First published 11th June 2015. Revised and updated 23rd June 2022. Everyone should have a space to sit outside in the summer. Ev...
                <p className='font-medium mt-2'>22.09.2024</p>
                </p>
            </div>
            <div className='w-1/2 flex flex-col gap-5 p-5'>
                <p className='border-2 bg-white p-3 rounded-2xl'>I’m a research-focused UX Designer & Writer. I love working with small and medium-scale businesses to design, build, and launch cutting-e...
                <p className='font-medium mt-2'>22.09.2024</p>
                </p>
                <p className='border-2 bg-white p-3 rounded-2xl'>Physical space is often conceived in three linear dimensions, although modern physici...
                <p className='font-medium mt-2'>22.09.2024</p>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Page