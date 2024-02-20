'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import clock from '@/public/assets/clock.svg'
import { sleepQualities } from "@/constants";

import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const Page = () => {
  const [ sleepQuality, setSleepQuality ] = useState('')
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments);

  const handleSubmit = () => {
    if(!sleepQuality) return toast.error('Youve not told use your sleep quality');

    dispatch(setAssessments({...assessments, sleep_quality: sleepQuality}));
    router.push('/taking-medications');
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="8" />
        <div className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">How would you rate your sleep quality?</h1>
            <div className="my-20">
                {sleepQualities.map(({quality, duration, icon}) => (
                    <div onClick={()=> setSleepQuality(quality)} key={quality} className={`flex my-1 hover:border-2 border-brown-80 rounded-xl p-5 mx-auto w-[70%] ${sleepQuality === quality && 'border-2'}`}>
                        <div className="w-full">
                            <p className="font-bold text-lg">{quality}</p>
                            <div className="flex">
                                <Image src={clock} alt='clock'/>
                                <p className="text-xs">{duration}</p>
                            </div>
                        </div>
                        <div>
                            <Image src={icon} alt={quality} />
                        </div>
                    </div>
                ))}
            </div>
            <div onClick={()=> handleSubmit()}>
                <Button title="Continue" icon={rightArrow} />
            </div>
        </div>
    </section>
  )
}

export default Page