'use client'

import { HiHome } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import therapy from '@/public/moodIcons/Therapy_AI.svg';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const BottomNav = () => {
    const pathname = usePathname()

  return (
    <nav className='w-full bg-white shadow-xl max-w-[50em] fixed bottom-0 md:bottom-5 mx-auto md:rounded-full h-[5em]'>
        <div className='flex items-center text-xs  justify-around p-4'>
            <Link href='/home'>
                <div className={`flex items-center flex-col ${pathname === '/home' && 'text-primary font-bold'}`}>
                    <HiHome className="w-7 h-7"/>
                    <span>Home</span>
                </div>
            </Link>
            <Link href='/message'>
                <div className={`flex items-center flex-col ${pathname === '/message' && 'text-primary font-bold'}`}>
                    <TbMessage2 className="w-7 h-7" />
                    <span>Message</span>
                </div>
            </Link>
            <Link href='/paddi-ai'>
                <div className={`flex items-center bottom-6 flex-col ${pathname === '/paddi-ai' && 'text-primary font-bold'}`}>
                    <Image src={therapy} alt="therapy" className="absolute bottom-10"  width={60} height={60} />
                    <span className="relative top-4">Therapy AI</span>
                </div>
            </Link>
            <Link href='/calender'>
                <div className={`flex items-center flex-col ${pathname === '/calender' && 'text-primary font-bold'}`}>
                        <IoCalendarOutline className="w-7 h-7" />
                        <span>Calender</span>
                </div>
            </Link>
            <Link href='/profile'>
                <div className={`flex items-center flex-col ${pathname === '/profile' && 'text-primary font-bold'}`}>
                    <IoPerson className="w-7 h-7"/>
                    <span>Profile</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default BottomNav;