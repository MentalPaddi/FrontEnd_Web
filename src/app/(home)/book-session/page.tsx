'use client'

import { IoIosArrowBack } from "react-icons/io";
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Link from "next/link";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Page = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <section className="flex flex-col items-center mb-40">
      <nav className="w-full bg-white p-10 font-bold text-xl">

        <Link href='/calender'>
          <div className="flex items-center gap-3 text-brown-80">
            <IoIosArrowBack />
            <p>Book a session</p>
          </div>
        </Link>
      </nav>

      <div className="p-7">
        <p className="font-semibold text-xl mb-3">Book a session with Sahana V</p>
        <div className="bg-white rounded-xl p-5 shadow-md mb-5 shadow-blue-500">
        <p className="text-center opacity-85 p-3">Select an available date to continue</p>
        <Calendar onChange={onChange} value={value}/>
        </div>
        <p>Pick a time</p>
      </div>

      <div className="p-7 text-brown-80">
        <p>select method</p>
        <div className="flex items-center gap-7 w-full justify-between mt-3">
          <p className="p-3 bg-[#EADFDF] rounded-xl">Video call</p>
          <p>or</p>
          <p className="p-3 rounded-xl bg-primary text-white">Message</p>
        </div>

        <button className="bg-primary mt-10 font-bold rounded-full w-full md:min-w-[25em] text-white p-5">Book session</button>
      </div>
    </section>
  )
}

export default Page