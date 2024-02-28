'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSubmitAssessmentMutation } from "@/api/authApi";
import toast from "react-hot-toast";

const Page = () => {
  const [ level, setLevel ] = useState(0)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments);
  const numbers = Array.from({ length: 5}, (_, index) => index++);

  const [submitAccessment] = useSubmitAssessmentMutation()

  const handleSubmit = async() => {
    setLoading(!loading)
    console.log(assessments)
    const result = await submitAccessment({...assessments, stress_level: level+1 })
    setLoading(!loading)
    const { error, data }:any = result; 

    if ( error ) {
      if(error?.error) return toast.error('Network Error')
    }

    if (data){
      toast.success('Data Submitted Successfully');
      router.push('/sign-in')
    }


    // router.push('/home');
  }


  return (
    <section className="p-5">
        <AssessmentNav pageNumber="11" />
        <div className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">How would you rate your stress level?</h1>
            <div className="flex items-center flex-col my-20">
              <p className="text-brown-80 font-bold text-8xl mb-10">{level+1}</p>
              <div className="p-2 justify-between rounded-full bg-white shadow-lg flex ">
                {numbers.map((number)=> (
                    <p key={number} onClick={()=> setLevel(number)} className={`w-[3.5em] h-[3.5em] hover:bg-primary text-lg hover:text-white flex items-center justify-center p-5 rounded-full font-bold text-brown-80 ${level===number && 'bg-primary text-white'}`}>{number+1}</p>
                ))}
              </div>
            </div>
            <div onClick={()=> handleSubmit()}>
            <Button title="Continue" icon={rightArrow} loading={loading}/>
            </div>
        </div>
    </section>
  ) 
}

export default Page