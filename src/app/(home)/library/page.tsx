'use client'

import { fetchAsync } from '@/api/authApi';
import { selectAuth } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { journalIcons } from '@/constants';

const Page = () => {
    const [myJournals, setMyJournals] = useState([]);
    const { signedInUser } = useAppSelector(selectAuth);

    if(!signedInUser) redirect('sign-in');
    const token = signedInUser.access;
    
    useEffect(()=> {
        const fetchJournls = async () => {
            const journals = await fetchAsync('/journal/create/', token);
            setMyJournals(journals);
        }

         fetchJournls();
    }, [token])

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

        {myJournals ? (
            <div className='flex items-center w-full'>
            <div className='p-5 w-1/2 mt-3 border-r-2'>
            {myJournals.map(({journal_text, created_at}:{journal_text:string, created_at:string}, index) => {
              
              if (index % 2 == 0) {
                 const [datePart, timePart] = created_at.split('T');
                return(
                        <p className='border-2 bg-white p-3 rounded-2xl mt-3' key={index}>{journal_text}
                            <span className='font-medium mt-2 block'>{datePart}</span>
                        </p>
                )
              }
            })}
            </div>
            <div className='p-5 w-1/2'>
            {myJournals.map(({journal_text, created_at}:{journal_text:string, created_at:string}, index) => {
              
              if (index % 2 !== 0) {
                const [datePart, timePart] = created_at.split('T');
                return(
                        <p className='border-2 bg-white p-3 rounded-2xl mt-3' key={index}>{journal_text}
                            <span className='font-medium mt-2 block'>{datePart}</span>
                        </p>
                )
              }
            })}
            </div>
        </div>
        ) : (
            <p>Loading...</p>
        )}
        
    </section>
  )
}

export default Page