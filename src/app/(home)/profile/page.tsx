'use client'

import Image from 'next/image';

import { IoIosArrowBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import warning from '@/public/assets/warning.svg';
import dp from '@/public/images/profile.png';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth, setSignInUser, setSignUpUser } from '@/redux/features/authSlice';
import { redirect, useRouter } from 'next/navigation';
import { IoLogOutOutline } from "react-icons/io5";

const Page = () => {
    const { signedInUser } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    const router = useRouter()

    if(!signedInUser) return redirect('/sign-in')

    const handleLogOut = () => {
        dispatch(setSignInUser(null))
        dispatch(setSignUpUser(null))

    }

  return (
    <section className='p-10 md:p-20 pb-20'>
       <Link href='/home'>
        <nav className='flex items-center text-brown-80 font-bold text-xl'>
                <IoIosArrowBack />
                <p>Profile</p>
        </nav>
        </Link>
        <div className='items-center flex justify-center mt-10 text-brown-80 flex-col font-bold'>
            <Image src={dp} height={100} width={100} alt='profile picture' />
            <p className='text-2xl mb-5'>{signedInUser.first_name}</p>
            <div className='text-primary text-lg flex items-center gap-2'>
                <Link href='/edit-profile'><p>Edit Profile</p></Link>
                <IoMdArrowRoundForward className='w-7 h-7'/>
            </div>
        </div>

        <div className='flex w-full justify-around my-10 h-[10em] items-center'>
            <div className='w-1/3 text-center'>
                <p className='opacity-70'>Age</p>
                <p className='font-bold text-4xl'>{signedInUser?.assessment_data?.age}yrs</p>
            </div>
            <div className='w-1/3 border-x-[2px] h-full flex flex-col justify-center text-center'>
                <p className='opacity-70'>Weight</p>
                <p className='font-bold text-4xl'>{signedInUser?.assessment_data.weight}Kg</p>
            </div>
            <div className='w-1/3 text-center'>
                <p className='opacity-70'>Height</p>
                <p className='font-bold text-4xl'>--cm</p>
            </div>
        </div>

        <div>
            <p className='font-bold text-xl mb-5 text-brown-80'>Contact Us</p>
            <div className='w-full flex items-center bg-white p-3 rounded-3xl justify-between'>
                <div className='flex items-center gap-3 w-full'>
                    <div className='bg-[#D9D9D9] rounded-3xl p-3 w-[4em] '>
                        <Image src={warning} width={50} height={50} alt='warning' />
                    </div>
                    <p className='font-semibold'>Emergency contact</p>
                </div>             
                <IoIosArrowForward className='w-7 h-7' />
            </div>
            <div className='w-full flex items-center mt-5 bg-white p-3 rounded-3xl justify-between'>
                <div className='flex items-center gap-3 w-full'>
                    <div className='bg-[#D9D9D9] rounded-3xl p-3 w-[4em] '>
                        <HiOutlineMail className='w-10 h-10' />
                    </div>
                    <p className='font-semibold'>Submit Feedback</p>
                </div>             
                <IoIosArrowForward className='w-7 h-7' />
            </div>
        </div>

        <div className='mt-10 cursor-pointer' onClick={()=> handleLogOut()}>
            <p className='font-bold text-xl mb-5 text-brown-80'>Log Out</p>
            <div className='w-full flex items-center bg-white p-3 rounded-3xl justify-between'>
                <div className='flex items-center gap-3 w-full'>
                    <div className='bg-[#D9D9D9] rounded-3xl p-3 w-[4em] '>
                        <IoLogOutOutline className='W-10 h-10 text-5xl' />
                    </div>
                    <p className='font-semibold'>Logout</p>
                </div>             
                <IoIosArrowForward className='w-7 h-7' />
            </div>
        </div>

        <p className='text-red-500 font-bold text-xl text-center my-10'>Delete Account</p>
    </section>
  )
}

export default Page
