import Link from 'next/link';
import { FaCirclePlay, FaRegClock } from 'react-icons/fa6';
import { IoCalendarOutline, IoNotifications } from 'react-icons/io5'

const Page = () => {
  return (
    <div className='p-10'>
        <nav className='flex text-brown-80 items-center justify-between'>
            <p className='font-bold text-xl'>Session</p>
            <div>
                <IoNotifications className='h-6 w-6'/>
            </div>
        </nav>
        <div>
            <div className='w-full mt-5 p-5 text-brown-80 rounded-2xl bg-[#EADFDF]'>
                <div>
                    <p className='font-bold text-2xl'>Upcoming Session</p>
                    <p className='text-xs my-1 font-normal'>Sehana V, Msc in Clinical Phychology</p>
                    <p className='font-semibold'>7:30 PM - 8:30 PM</p>
                </div>
                <div className='mt-3 cursor-pointer'>
                    <p className='text-primary font-bold items-center gap-2 text-lg flex'>Join Now <FaCirclePlay /></p>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-brown-80 font-semibold text-lg'>All Sessions</p>
                <div>
                    <div className='w-full mt-5 p-5 rounded-2xl bg-[#045481]'>
                        <div className='flex border-b-[1.5px] pb-3 border-[#d9d8d85b] text-white items-center gap-3'>
                            <div className='w-[4em] h-[4em] rounded-full bg-white'></div>
                            <div>
                                <h1 className='font-bold'>Sahana V</h1>
                                <p className='text-sm font-light'>Msc in Clinical Psychology</p>
                            </div>
                        </div>
                        <div className='mt-3 cursor-pointer'>
                            <div className='flex gap-7'>
                                <div className='flex items-center gap-2'>
                                    <IoCalendarOutline className='text-[#D6CCC6]'/>
                                    <p className='text-[#A4A4A4] text-sm'>31st March 22</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaRegClock className='text-[#D6CCC6]' />
                                    <p className='text-[#A4A4A4] text-sm'>7:30 PM - 8:30 PM</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-10 mt-4'>
                                <Link href='/book-session'>
                                    <button className='text-white font-bold p-3 rounded-xl bg-primary '>Reschedule</button>
                                </Link>
                                <p className='font-bold text-primary'>Join Now</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-5 p-5 rounded-2xl bg-[#71ccea]'>
                        <div className='flex border-b-[1.5px] pb-3 border-[#d9d8d85b] text-white items-center gap-3'>
                            <div className='w-[4em] h-[4em] rounded-full bg-white'></div>
                            <div className='text-brown-80'>
                                <h1 className='font-bold'>Sahana V</h1>
                                <p className='text-sm font-medium'>Msc in Clinical Psychology</p>
                            </div>
                        </div>
                        <div className='mt-3 cursor-pointer'>
                            <div className='flex gap-7'>
                                <div className='flex items-center gap-2'>
                                    <IoCalendarOutline className='text-[#fff]'/>
                                    <p className='text-sm text-brown-80'>31st March 22</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaRegClock className='text-[#fff]' />
                                    <p className='text-sm text-brown-80'>7:30 PM - 8:30 PM</p>
                                </div>
                            </div>
                           <Link href='/book-session'>
                                <div className='flex items-center gap-10 mt-4'>
                                    <button className='text-white font-bold p-3 rounded-xl bg-primary'>Re-book</button>
                                    <p className='font-bold text-primary'>Join Now</p>
                                </div>
                           </Link>
                        </div>
                    </div>
                    <div className='w-full mt-5 p-5 rounded-2xl bg-[#71ccea]'>
                        <div className='flex border-b-[1.5px] pb-3 border-[#d9d8d85b] text-white items-center gap-3'>
                            <div className='w-[4em] h-[4em] rounded-full bg-white'></div>
                            <div className='text-brown-80'>
                                <h1 className='font-bold'>Sahana V</h1>
                                <p className='text-sm font-medium'>Msc in Clinical Psychology</p>
                            </div>
                        </div>
                        <div className='mt-3 cursor-pointer'>
                            <div className='flex gap-7'>
                                <div className='flex items-center gap-2'>
                                    <IoCalendarOutline className='text-[#fff]'/>
                                    <p className='text-sm text-brown-80'>31st March 22</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaRegClock className='text-[#fff]' />
                                    <p className='text-sm text-brown-80'>7:30 PM - 8:30 PM</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-10 mt-4'>
                                <button className='text-white font-bold p-3 rounded-xl bg-primary'>Re-book</button>
                                <p className='font-bold text-primary'>Join Now</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-5 p-5 rounded-2xl bg-[#71ccea]'>
                        <div className='flex border-b-[1.5px] pb-3 border-[#d9d8d85b] text-white items-center gap-3'>
                            <div className='w-[4em] h-[4em] rounded-full bg-white'></div>
                            <div className='text-brown-80'>
                                <h1 className='font-bold'>Sahana V</h1>
                                <p className='text-sm font-medium'>Msc in Clinical Psychology</p>
                            </div>
                        </div>
                        <div className='mt-3 cursor-pointer'>
                            <div className='flex gap-7'>
                                <div className='flex items-center gap-2'>
                                    <IoCalendarOutline className='text-[#fff]'/>
                                    <p className='text-sm text-brown-80'>31st March 22</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaRegClock className='text-[#fff]' />
                                    <p className='text-sm text-brown-80'>7:30 PM - 8:30 PM</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-10 mt-4'>
                                <button className='text-white font-bold p-3 rounded-xl bg-primary'>Re-book</button>
                                <p className='font-bold text-primary'>Join Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page