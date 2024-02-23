import { HiHome } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import therapy from '@/public/moodIcons/Therapy_AI.svg';
import Image from "next/image";
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className='w-full bg-white max-w-[50em] fixed bottom-0 md:bottom-5 mx-auto md:rounded-full h-[5em]'>
        <div className='flex items-center text-xs  justify-around p-4'>
            <div className="flex items-center flex-col">
                <HiHome className="w-7 h-7"/>
                <span>Home</span>
            </div>
            <div className="flex items-center flex-col">
                <TbMessage2 className="w-7 h-7" />
                <span>Message</span>
            </div>
            <div className="flex items-center bottom-6 flex-col">
                <Image src={therapy} alt="therapy" className="absolute bottom-10"  width={60} height={60} />
                <span className="relative top-4">Therapy AI</span>
            </div>
            <Link href='/calender'>
                <div className="flex items-center flex-col">
                        <IoCalendarOutline className="w-7 h-7" />
                        <span>Calender</span>
                </div>
            </Link>
            <div className="flex items-center flex-col">
                <IoPerson className="w-7 h-7"/>
                <span>Profile</span>
            </div>
        </div>
    </nav>
  )
}

export default BottomNav;