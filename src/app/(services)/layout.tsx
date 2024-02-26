'use client'
import '../globals.css'

import { FiSearch } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import h from '@/public/assets/h.svg';
import Image from 'next/image';
import Navbar from '@/components/navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-primary text-white'>
      <Navbar />
      <div className='p-10'>
        <div>
          <p className='font-bold text-3xl mb-3'>Support Center</p>
          <p className='text-sm w-full max-w-[30em] opacity-85'>Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.</p>
        </div>
        <div>
          <div className='flex items-center mt-10 h-[3em]'>
            <div className='bg-white text-black-50 h-full w-[3em] text-[#414141] text-xl flex items-center justify-center'><FiSearch /></div>
            <input type='search' placeholder='Search' className='h-full w-[20em] p-2 text-[#414141] outline-none' />
            <p className='p-3 h-full bg-black bg-opacity-60 cursor-pointer'>search</p>
          </div>
          <div className='text-sm flex items-center gap-5 mt-5'>
            <p className='opacity-60'>POPULAR:</p>
            <p className='underline'>Why am i depressed?</p>
            <p className='underline'>I dont wanna be alone.</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <footer className='p-10 pb-3'>
        <div className='flex md:flex-row flex-col md:items-center gap-5 items-start w-full justify-between'>
          <div className='w-full md:w-1/2'>
            <p className='font-bold text-2xl'>Still have questions? We're here to help!</p>
            <p className='opacity-85 mt-3 text-sm w-full max-w-[30em]'>Chat with our support team by clicking the chat button in the right. We're here to assist you!</p>
          </div>
          <div className='w-full md:w-1/2 flex items-center md:justify-center'>
            <div className='p-5 text-center rounded-xl w-[13em] justify-center bg-black bg-opacity-60 flex items-center gap-3'>
              <IoChatboxOutline />
              <p>Chat Support</p>
            </div>
          </div>
        </div>
        <div className='flex items-start md:flex-row flex-col'>
          <div className='w-full md:w-1/2 mt-10'>
            <div className='flex gap-3 items-center mb-3'>
              <Image src={h} width={30} height={30} alt='h'/>
              <p className='font-bold text-2xl'>MentalPaddi</p>
            </div>
            <p className='text-sm opacity-85'>At Mentalpaddi, we believe that reliable, high-quality hosting should be accessible to everyone. That's why we offer a range of hosting plans to suit the needs of businesses and individuals alike. Our team of experts is always on hand to provide fast, friendly support, and we use the latest technology to ensure that your website is always up and running smoothly.</p>
          </div>
          <div className='w-full md:w-1/2 opacity-85 flex items-start mt-10 md:justify-center justify-start gap-10'>
            <div>
              <p className='opacity-60 font-semibold text-lg'>COMPANY</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Services</p>
              <p>Help</p>
            </div>
            <div>
              <p className='opacity-60 font-semibold text-lg'>GET IN TOUCH</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Dribble</p>
            </div>
          </div>
        </div>
        <div className='h-10 flex items-center justify-center text-sm text-white w-full opacity-60'>
          <p>COPYRIGHT &copy; - Cruise</p>
        </div>
      </footer>
    </section>
  )
}
